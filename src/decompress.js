import { Parse } from 'unzipper';
import { createWriteStream, mkdirSync } from 'node:fs';
import { join } from 'node:path';
/**
 * 
 * @param {import("http").IncomingMessage} incoming 
 * @param {*} parent 
 * @returns 
 */
export function Decompress (incoming, parent = "./") {
    return new Promise((resolve, reject) => {
        incoming.on("error", reject);
        const out = incoming.pipe(Parse());
        out.on("entry", (entry) => {
            const filePath = join(parent, entry.path);
            switch (entry.type) {
                case "Directory":
                    mkdirSync(filePath, { recursive: true });
                    break;
                case "File":
                    entry.pipe(createWriteStream(filePath));
                    break;
            }
        });
        out.on("close", resolve);
        out.on("error", reject);
    });
};