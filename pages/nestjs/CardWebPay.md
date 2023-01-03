# Card Web Pay

## GP webpay

1. Create secret private key from GP webpay and dowlnoad it also download public key. Documentation is [here](https://www.gpwebpay.cz/downloads/GP_webpay_HTTP.pdf)

2. Create new service into `services/vendors/gp-webpay.ts`

   **Example**:

   ```typescript
   // TODO rewrite this in a way where it can be shared between projects (that's way I'm not making it a service for now)

   import * as formurlencoded from 'form-urlencoded';
   import { promises, readFileSync } from 'fs';
   import { createSign, createVerify } from 'crypto';

   const ALGORITHM = 'SHA1';
   const SIGNATURE_FORMAT = 'base64';

   export enum PAYMENT_OPERATION {
     CREATE_ORDER = 'CREATE_ORDER', // Card payment
     CARD_VERIFICATION = 'CARD_VERIFICATION', // Card verification
     FINALIZE_ORDER = 'FINALIZE_ORDER', // MasterPass digital wallet
   }

   // TODO for this to work with deployment, it either needs to be configured using env or done otherwise sensibly
   // if we want to store prod keys elsewhere change how this is handled
   const GP_WEBPAY_PRIVATE_KEY_PATH = `./apps/nest/parking-backend/src/app/public/webpay-keys/${process.env.GP_WEBPAY_PRIVATE_KEY_FILE_PVK}`;
   const GP_WEBPAY_PUBLIC_KEY_PATH = `./apps/nest/parking-backend/src/app/public/webpay-keys/${process.env.GP_WEBPAY_PRIVATE_KEY_FILE_PUB}`;

   const createSignature = (
     data: string,
     privateKey: Buffer,
     privateKeyPassphrase: string
   ): string => {
     const signer = createSign(ALGORITHM);
     signer.update(data);
     signer.end();
     return signer.sign(
       { key: privateKey, passphrase: privateKeyPassphrase },
       SIGNATURE_FORMAT
     );
   };

   const verifySignature = (
     data: string,
     signature: string,
     publicKey: Buffer
   ): boolean => {
     const verifier = createVerify(ALGORITHM);
     verifier.update(data);
     verifier.end();
     const result = verifier.verify(publicKey, signature, SIGNATURE_FORMAT);
     // console.log(`Signature verified: ${result}`)
     return result;
   };

   type GPWebpayHttpRequest = {
     MERCHANTNUMBER: string;
     OPERATION: string;
     ORDERNUMBER: number;
     AMOUNT: number;
     CURRENCY?: number;
     DEPOSITFLAG: number;
     MERORDERNUM?: number;
     URL: string;
     DESCRIPTION?: string;
     MD?: string;
     USERPARAM1?: string;
     PAYMETHOD?: string;
     DISABLEPAYMETHOD?: string;
     PAYMETHODS?: string;
     EMAIL?: string;
     REFERENCENUMBER?: string;
     ADDINFO?: string;
     DIGEST?: string;
   };

   type GPWebpayHttpResponse = {
     OPERATION: string;
     ORDERNUMBER: number;
     MERORDERNUM?: number;
     MD?: string;
     PRCODE: string;
     SRCODE: string;
     RESULTTEXT?: string;
     USERPARAM1?: string;
     ADDINFO?: string;
     TOKEN?: string;
     EXPIRY?: string;
     ACSRES?: string;
     ACCODE?: string;
     PANPATTERN?: string;
     DAYTOCAPTURE?: string;
     TOKENREGSTATUS?: string;
     ACRC?: string;
     RRN?: string;
     PAR?: string;
     TRACEID?: string;
     DIGEST: string;
     DIGEST1: string;
   };

   export const checkPaymentKeys = () => {
     try {
       // const publicKey = readFileSync(webpayConfig.publicKeyPath)
       const privateKey = readFileSync(GP_WEBPAY_PRIVATE_KEY_PATH);
       const gpPublicKey = readFileSync(GP_WEBPAY_PUBLIC_KEY_PATH);

       if (
         // publicKey.length === 0 ||
         privateKey.length === 0 ||
         gpPublicKey.length === 0
       ) {
         throw new Error('Empty key files');
       }

       if (!process.env.GP_WEBPAY_PRIVATE_KEY_PASSWORD) {
         throw new Error('Empty private key password');
       }

       if (!process.env.GP_WEBPAY_MERCHANT_NUMBER) {
         throw new Error('Empty merchant number');
       }
     } catch (err) {
       console.log(err);
       return false;
     }
     return true;
   };

   const createRequestSignatureString = (
     paymentObject: GPWebpayHttpRequest
   ): string => {
     // DO NOT CHANGE ORDER OF PARAMS
     let data: string;
     data = `${paymentObject.MERCHANTNUMBER}|${paymentObject.OPERATION}|${paymentObject.ORDERNUMBER}|${paymentObject.AMOUNT}`;
     data += paymentObject.CURRENCY ? `|${paymentObject.CURRENCY}` : '';
     data += paymentObject.DEPOSITFLAG ? `|${paymentObject.DEPOSITFLAG}` : '';
     data += paymentObject.URL ? `|${paymentObject.URL}` : '';
     data += paymentObject.USERPARAM1 ? `|${paymentObject.USERPARAM1}` : '';
     return data;
   };

   // In case of DIGEST1 verification use withMerchantNumber = true
   const createResponseSignatureString = (
     responseObject: GPWebpayHttpResponse,
     withMerchantNumber = false
   ): string => {
     // DO NOT CHANGE ORDER OF PARAMS
     let data: string;
     data = `${responseObject.OPERATION}`;
     data += `|${responseObject.ORDERNUMBER}`;
     data += responseObject.MERORDERNUM ? `|${responseObject.MERORDERNUM}` : '';
     data += responseObject.MD ? `|${responseObject.MD}` : '';
     data += `|${responseObject.PRCODE}`;
     data += `|${responseObject.SRCODE}`;
     data += responseObject.RESULTTEXT ? `|${responseObject.RESULTTEXT}` : '';
     data += responseObject.USERPARAM1 ? `|${responseObject.USERPARAM1}` : '';
     data += responseObject.ADDINFO ? `|${responseObject.ADDINFO}` : '';
     data += responseObject.TOKEN ? `|${responseObject.TOKEN}` : '';
     data += responseObject.EXPIRY ? `|${responseObject.EXPIRY}` : '';
     data += responseObject.ACSRES ? `|${responseObject.ACSRES}` : '';
     data += responseObject.ACCODE ? `|${responseObject.ACCODE}` : '';
     data += responseObject.PANPATTERN ? `|${responseObject.PANPATTERN}` : '';
     data += responseObject.DAYTOCAPTURE
       ? `|${responseObject.DAYTOCAPTURE}`
       : '';
     data += responseObject.TOKENREGSTATUS
       ? `|${responseObject.TOKENREGSTATUS}`
       : '';
     data += responseObject.ACRC ? `|${responseObject.ACRC}` : '';
     data += responseObject.RRN ? `|${responseObject.RRN}` : '';
     data += responseObject.PAR ? `|${responseObject.PAR}` : '';
     data += responseObject.TRACEID ? `|${responseObject.TRACEID}` : '';
     data += withMerchantNumber
       ? `|${process.env.GP_WEBPAY_MERCHANT_NUMBER}`
       : '';
     return data;
   };

   const signData = async (paymentObject: GPWebpayHttpRequest) => {
     const privateKeyPassword = process.env.GP_WEBPAY_PRIVATE_KEY_PASSWORD;
     if (!privateKeyPassword)
       throw new Error('Missing GP_WEBPAY_PRIVATE_KEY_PASSWORD env var');
     const dataToSign = createRequestSignatureString(paymentObject);
     // const publicKey = await promises.readFile(webpayConfig.publicKeyPath)
     const privateKey = await promises.readFile(GP_WEBPAY_PRIVATE_KEY_PATH);
     return createSignature(dataToSign, privateKey, privateKeyPassword);
     // self-verify signature
     // if (verifySignature(dataToSign, signature, publicKey) === false) {
     // 	throw new Error('Problem with verifying signature, check payment keys.')
     // }
   };

   export const verifyPaymentSignature = async (
     paymentResponse: GPWebpayHttpResponse
   ) => {
     const data = createResponseSignatureString(paymentResponse);
     const dataWithMerchantNumber = createResponseSignatureString(
       paymentResponse,
       true
     );
     const publicKey = await promises.readFile(GP_WEBPAY_PUBLIC_KEY_PATH);
     return (
       verifySignature(data, paymentResponse.DIGEST, publicKey) &&
       verifySignature(
         dataWithMerchantNumber,
         paymentResponse.DIGEST1,
         publicKey
       )
     );
   };

   export const verifyPaymentResult = (paymentResponse: GPWebpayHttpResponse) =>
     // AK PRCODE && SRCODE === 0 => PLATBA PREBEHLA V PORIADKU
     parseInt(paymentResponse.PRCODE, 10) === 0 &&
     parseInt(paymentResponse.SRCODE, 10) === 0;

   type CreatePaymentParams = {
     orderNumber: number;
     amountInCents: number;
     transactionId: string;
   };

   export const createPayment = async ({
     orderNumber,
     amountInCents,
     transactionId,
   }: CreatePaymentParams) => {
     const merchantNumber = process.env.GP_WEBPAY_MERCHANT_NUMBER;
     if (!merchantNumber)
       throw new Error('Missing GP_WEBPAY_MERCHANT_NUMBER env var');
     const paymentObject: GPWebpayHttpRequest = {
       MERCHANTNUMBER: merchantNumber,
       OPERATION: PAYMENT_OPERATION.CREATE_ORDER,
       ORDERNUMBER: orderNumber, // must be unique
       AMOUNT: amountInCents,
       CURRENCY: Number(process.env.GP_WEBPAY_CURRENCY), // num code based on ISO 4217
       // TODO check below, whether we can't (or whether we should) work with 0 as well
       DEPOSITFLAG: 1, // 1 - Require immediate payment | 0 - Do not require immediate payment
       URL: `${process.env.GP_WEBPAY_CLIENT_APP_URL}/api-mpa/payment-response-redirect/${transactionId}`, // BE URL where will result be sent
     };

     const signedObject: GPWebpayHttpRequest = {
       ...paymentObject,
       DIGEST: await signData(paymentObject),
     };

     return {
       url: process.env.GP_WEBPAY_HTTP_API_URL,
       data: signedObject,
       dataToSign: createRequestSignatureString(paymentObject),
       formurlencoded: formurlencoded(signedObject, { ignorenull: true }),
     };
   };
   ```

3. Create endpoints into `app.controller.ts` for:

   3.1) send request into GP webpay

   3.2) get data from GP and check if payment was successful

   3.3) redirect from check payment to payment was correct or payment failed

   **Example:**

   ```typescript
   @Get('payment-gateway-redirect/:orderNumber')
   @Redirect('www.TODO-what-to-put-here.com', 302)
   async paymentGatewayRedirect(@Param('orderNumber') orderNumber: string) {
     // TODO that orderNumber is an integer might get validated via pipe ?
     // TODO validate that such order was previously created in db
     const { url, formurlencoded } = await createPayment({
       orderNumber: Number.parseInt(orderNumber),
       amountInCents: 100,
       transactionId: '123',
     });
     // const result = await this.appService.ticketPayment(data, { orderNumber });
     return { url: `${url}?${formurlencoded}` };
   }

   @Get('payment-response-redirect/:id')
   @Redirect('/api-mpa/payment-success', 302)
   async paymentResponseRedirect(
     @Request() req: IncomingMessage,
     @Param('id') id: string
   ) {
     const result = await this.appTicketService.checkCardPayment(id, req);
     return { url: `${process.env.GP_WEBPAY_CLIENT_APP_URL}/api-mpa/${result}` };
   }

   @Get('payment-success')
   async paymentResponseSuccess() {
     console.log('success');
     // we need an url that frontend will recognize as successfully accepted payment
   }

   @Get('payment-failure')
   async paymentResponseFailure() {
     console.log('failure');
     // we need an url that frontend will recognize as failed payment that warrants restarting the whole payment process
   }

   @Get('parksys-failure')
   async paymentParksysResponseFailure() {
     console.log('parksys failure');
     // we need an url that frontend will recognize as failed payment that warrants restarting the whole payment process
   }
   ```
