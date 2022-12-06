# Upload file
For purposes of uploading a file in form, we are using widget **Upload**. This widget has 2 types: **button** and **drag&drop**.
Upload widget can upload one or more file. We can set these settings in uiSchema, also with restriction of accepted file extensions and size of file.

## Upload file on frontend
When we choose one or multiple files, at first they are **validated**. We must check if their size is up to set **maximum file size**. 
In case we dropped files, we must also check if their **extension is accepted**. If file is validated without errors,
it's sent to server by endpoint `/api/eforms/upload-file` and added to list of files under widget with loading spinner.
If there are some frontend errors, file is not added to file list under widget but info about error is written under widget.

File name will be also changed before sending to server. Timestamp and random hash are added as prefix, 
divided byt character _ between timestamp, random hash and original name. We can also describe it byt this format
`timestamp_randomHash_originalFileName.fileExtension`. File will be saved on server with this name.

## Upload file on server
After frontend validation, every file is separately sent to endpoint `/api/eforms/upload-file` by Rest API post request.
We use **S3 Bucket** to save files on server. For Node implementation, we use library [minio](https://www.npmjs.com/package/minio).
At this moment, we don't have implemented S3 Bucket at our server, so we use [minio playground](https://play.min.io).
It's possible to create public buckets here. Public login uses accessKey as username and secretKey as password. 
You can find both at `/backend/utils/minio-client.ts`. When our own S3 bucket on server will be prepared, it's just 
necessary to change info in minioClient inside that file.

Before upload of file, Minio client is testing if our S3 bucket exists. If not, it would create new. When minio client is sure,
that bucket exists, it will upload and save file inside. Endpoint is returning json with info about success or failure.
If any error occurred on server, file in file list under Upload widget on frontend will be marked with red color.

## Delete file
It's possible to delete uploaded file by **clicking** on trash icon next to file in file list under Upload widget on frontend.
Rest API delete request is called at endpoint `/api/eforms/delete-file`. Server will test if S3 bucket exists and if not,
it will throw Error, because there is no reason to create any bucket, when we want to delete something we think it's already created.
If bucket exists, minio client **deletes file** from our bucket.

If we are using Upload with possibility to upload only one file, we are also deleting already uploaded file if we would upload new.
Same api endpoint is called and after old uploaded file will be deleted, new one will be uploaded with another endpoint.
Basically it's **replacing** old uploaded file by new.
