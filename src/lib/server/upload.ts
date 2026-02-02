import axios from "axios";

const uploadURL = "https://catbox.moe/user/api.php";

export async function uploadFromStream(
    stream: ReadableStream,
    contentType?: string,
) {
    const response = await axios.post(uploadURL, stream, {
        headers: {
            "Content-Type": contentType || "",
        },
    });

    return new Response(JSON.stringify({ url: response.data }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
