import  { readFile } from 'fs/promises'
import { readFileSync } from 'fs'
import path from 'path'
const backProjectRootGit = (projectName) => {
    let excuteRoot = process.cwd().toString().trim();
    excuteRoot = excuteRoot.split(projectName)[0];
    return path.join(excuteRoot,projectName,'.git')
}
async function getGitHeadInfo(projectName = '') {
    const root = backProjectRootGit(projectName)
    let ref = await readFile(path.join(root, 'HEAD'));
    ref = (ref.toString().trim()).split(': ')
    const headPath = path.join(root, ref[1])
    let headHash = await readFile(headPath)
    headHash = headHash.toString().trim();
    return {
        currentHeadHash:headHash,
        currentRef:ref[1]
    }

}
function getGitHeadInfoSync(projectName){
    const root = backProjectRootGit(projectName)
    let ref = readFileSync(path.join(root, 'HEAD'));
    ref = (ref.toString().trim()).split(': ')
    const headPath = path.join(root, ref[1])
    let headHash =  readFileSync(headPath)
    headHash = headHash.toString().trim();
    return {
        currentHeadHash:headHash,
        currentRef:ref[1]
    }
}

module.exports = {
    getGitHeadInfo,
    getGitHeadInfoSync
}
