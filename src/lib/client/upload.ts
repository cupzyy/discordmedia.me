import axios from "axios";

export async function uploadFile(
    file: File,
    onProgress?: (progress: number) => void,
) {
    let url;
    let uploadData = new FormData();
    uploadData.append("fileToUpload", file);
    uploadData.append("reqtype", "fileupload");

    await axios
        .post("/api/uploadVideo", uploadData, {
            onUploadProgress: (progressEvent) => {
                if (onProgress) {
                    if (progressEvent.bytes) {
                        onProgress(
                            Math.round(
                                (progressEvent.loaded /
                                    (progressEvent.total || 0)) *
                                    100,
                            ),
                        );
                    }
                }
            },
        })
        .then(function (response) {
            if (onProgress) {
                onProgress(100);
            }
            url = response.data.url;
        });
    return url;
}
