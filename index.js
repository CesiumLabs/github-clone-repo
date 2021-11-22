import { Downloader, Decompress } from './src/index.js';
import { promises as fsPromises, existsSync } from 'node:fs';

export default async function ({ owner, repository, branch, outPath = "./" }) {
    try {
        const archive = await Downloader(owner, repository, branch);
        if (!existsSync(outPath)) await fsPromises.mkdir(outPath, { recursive: true });
        await Decompress(archive, outPath);
        return true;
    } catch {
        return false;
    }
};
