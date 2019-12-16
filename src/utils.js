export function getEntryUrl(name) {
    // 判断当前的环境，适配web端
    if (weex.config.env.platform === "Web") {
        return './' + name + '.html'
    } else {
        let arr = weex.config.bundleUrl.split('/');
        arr.pop();
        arr.push(name + '.js');
        return arr.join('/');
    }
}