'use strict';

var promises = require('fs/promises');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

const backProjectRootGit = (projectName) => {
    let excuteRoot = process.cwd().toString().trim();
    excuteRoot = excuteRoot.split(projectName)[0];
    return excuteRoot+`${projectName}\\.git`
};
async function getGitHeadInfo(projectName = '') {
    const root = backProjectRootGit(projectName);
    let ref = await promises.readFile(root+'\\HEAD');
    ref = (ref.toString().trim()).split(': ');
    const headPath = path__default['default'].join(root, ref[1]);
    let headHash = await promises.readFile(headPath);
    headHash = headHash.toString().trim();
    return {
        currentHeadHash:headHash,
        currentRef:ref[1]
    }

}
module.exports = getGitHeadInfo;
