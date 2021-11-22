import { Downloader, Decompress } from './src/index.js';

export default async function ({ owner, repository, branch, outPath = "./" }) {
    try {
        const archive = await Downloader(owner, repository, branch);
        await Decompress(archive, outPath);
        return true;
    } catch {
        return false;
    }
};
