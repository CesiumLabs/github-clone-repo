const unzipper = require("unzipper");
const fs = require("node:fs");
const path = require("node:path");

/**
 * 
 * @param {import("http").IncomingMessage} incoming 
 * @param {*} parent 
 * @returns 
 */
module.exports = (incoming, parent = "./") => {
    return new Promise((resolve, reject) => {
        incoming.on("error", reject);
        const out = incoming.pipe(unzipper.Parse());
        out.on("entry", (entry) => {
            const filePath = path.join(parent, entry.path);
            switch (entry.type) {
                case "Directory":
                    fs.mkdirSync(filePath, { recursive: true });
                    break;
                case "File":
                    entry.pipe(fs.createWriteStream(filePath));
                    break;
            }
        });
        out.on("close", resolve);
        out.on("error", reject);
    });
};