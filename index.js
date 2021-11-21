const downloadRepoArchive = require("./src/downloadRepoArchive");
const decompress = require("./src/decompress");

module.exports = async ({ owner, repository, branch, outPath = "./" }) => {
    try {
        const archive = await downloadRepoArchive(owner, repository, branch);
        await decompress(archive, outPath);
        return true;
    } catch {
        return false;
    }
};