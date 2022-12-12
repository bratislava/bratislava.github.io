# Upload file
For purposes of uploading a file in the form, we are using the widget **Upload**. This widget has 2 types: **button** and **drag&drop**.
Upload widget can upload one or more files. We can set these settings in uiSchema, also with the restriction of accepted file extensions and size of the file.

## Upload file on frontend
When we choose one or multiple files, at first they are **validated**. We must check if their size is up to set **maximum file size**.
In case we dropped files, we must also check if their **extension is accepted**. If the file is validated without errors,
it's sent to the server by endpoint `/api/eforms/upload-file` and added to the list of files under the widget with a loading spinner.
If there are some frontend errors, the file is not added to the file list under the widget but info about an error is written under the widget.

The file name will be also changed before sending it to the server. Timestamp and random hash are added as prefixes,
divided by character _ between timestamp, random hash, and original name. We can also describe it by this format
`timestamp_randomHash_originalFileName.fileExtension`. The file will be saved on the server with this name.

## Upload file on the server
After frontend validation, every file is separately sent to endpoint `/api/eforms/upload-file` by Rest API post request.
We use **S3 Bucket** to save files on the server. For Node implementation, we use the library [minio](https://www.npmjs.com/package/minio).
At this moment, we don't have implemented S3 Bucket on our server, so we use [minio playground](https://play.min.io).
It's possible to create public buckets here. Public login uses accessKey as username and secretKey as password.
You can find both at `/backend/utils/minio-client.ts`. When our own S3 bucket on the server will be prepared, it's just
necessary to change info in minioClient inside that file.

Before uploading of a file, the Minio client is testing if our S3 bucket exists. If not, it would create new. When the Minio client is sure,
that bucket exists, it will upload and save files inside. The endpoint is returning JSON with info about success or failure.
If any error occurred on the server, the file in the list of files under the Upload widget on frontend will be marked with red color.

## Delete file
It's possible to delete the uploaded files by **clicking** on the trash icon next to the file in the list of files under the Upload widget on frontend.
Rest API delete request is called at endpoint `/api/eforms/delete-file`. The server will test if S3 bucket exists and if not,
it will throw an error because there is no reason to create any bucket, when we want to delete something we think it's already created.
If a bucket exists, Minio client **deletes the file** from our bucket.

If we are using Upload with a possibility to upload only one file, we are also deleting already uploaded file if we would upload new one.
Same API endpoint is called and after the old uploaded file will be deleted, a new one will be uploaded with another endpoint.
Basically, it's **replacing** old uploaded file with a new one.

## Usage in RJSF
Upload widget is possible to fully use in RJSF forms. This widget is returning string or array of strings.
This string represents name of uploaded file. Files with error are not returned.
