declare module "github-clone-repo" {
    export interface CloneMetadata {
        owner: string;
        repository: string;
        branch: string;
        outPath?: string;
    }
    
    export default function CloneFunction(cloneMetadata: CloneMetadata): Promise<boolean>;
}