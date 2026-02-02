import { eq } from "drizzle-orm";
import { db } from "./client";
import { urlTable } from "./schema";

export async function addUrl(
    id: string,
    videoUrl: string,
    thumbnailUrl?: string,
) {
    db.insert(urlTable)
        .values({ id: id, video_url: videoUrl, thumbnail_url: thumbnailUrl })
        .run();
}

export async function getData(id: string) {
    return (await db.select().from(urlTable).where(eq(urlTable.id, id)))[0];
}

export async function generateID(length: number = 6) {
    return (Math.random() + 1).toString(36).slice(-length);
}
