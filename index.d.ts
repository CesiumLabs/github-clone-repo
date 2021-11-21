declare module "github-clone-repo" {
    interface CloneMetadata {
        owner: string;
        repository: string;
        branch: string;
        outPath?: string;
    }
    
    function CloneFunction(cloneMetadata: CloneMetadata): Promise<boolean>;
    
    export = CloneFunction;
}