const {getGitHeadInfo,getGitHeadInfoSync } = require('./../dist/index')


getGitHeadInfo('getGitHashInfo').then(res => {
    console.log(res)
})

const info = getGitHeadInfoSync('getGitHashInfo')
console.log(info, 'info')
