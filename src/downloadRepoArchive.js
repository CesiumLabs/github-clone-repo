import { get } from 'node:https';
const url = ({ owner, repo, branch }) => {
    return `https://codeload.github.com/${owner}/${repo}/zip/refs/heads/${branch}`;
};

export function Downloader(owner, repository, branch) {
    return new Promise((resolve, reject) => {
        const gitURL = url({owner, repo: repository, branch});
        get(gitURL, (res) => {
            if (res.statusCode !== 200) return reject(new Error(`Request failed with status code ${res.statusCode} (${res.statusMessage})`));
            resolve(res);
        });
    });
}