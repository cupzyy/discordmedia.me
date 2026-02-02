import { uploadFromStream } from "$lib/server/upload";
import { Readable } from "stream";

export async function POST({ request, cookies }) {
    const nodeStream = Readable.fromWeb(request.body);

    return uploadFromStream(nodeStream, request.headers.get("content-type"));
}
