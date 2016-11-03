var cache = {}
var loading = {}
var loadedScript = {}
var globalConfig = {}


function loadScript(url) {
    return new Promise(function (resolve, reject) {
        if(loadedScript[url])
            return setTimeout(() => resolve(), 0)

        let script,
            loadCb = () => {
                loadedScript[url] = true
                resolve()
            },
            errorCb = reject

        if((script = loading[url])) {
            let lcb = script.onload
            let ecb  = script.onerror
            script.onload = () => {
                lcb()
                loadCb()
            }
            script.onerror = (e) => {
                ecb(e)
                errorCb()
            }
            return
        }
        script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = url
        script.onload = loadCb
        script.onerror = errorCb
        loading[url] = script
        document.body.appendChild(script)
    })
}
function loadJSON(url) {
    return new Promise(function(resolve, reject){
        let cached
        if((cached = cache[url]))
            return setTimeout(() => resolve({
                url: url,
                data: cached
            }), 0)

        let xhr,
            loadCb = () => {
                if (xhr.readyState === 4) {
                    delete loading[url]
                    if(xhr.status === 200) {
                        // cache the content of current url
                        cache[url] = xhr.response
                        resolve({
                            url: url,
                            data: xhr.response
                        })
                    } else
                        reject(xhr.status)
                }
            },
            errorCb = () => reject(xhr.status)

        if((xhr = loading[url])) {
            let lcb = xhr.onreadystatechange
            let ecb = xhr.onerror
            xhr.onreadystatechange = () => {
                lcb()
                loadCb()
            }
            xhr.onerror = () => {
                ecb()
                errorCb()
            }
            return
        }
        xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.responseType = 'json'
        xhr.onreadystatechange = loadCb
        xhr.onerror = errorCb
        xhr.send()
        loading[url] = xhr
    })
}
function pad(num, size) {
    var s = num + ''
    while (s.length < size) s = '0' + s
    return s
}
function getConfig(path) {
    if(!path) return globalConfig
    var items = path.split('/')
    var cur = globalConfig
    for(let i = 0, m = items.length; i < m; i++) {
        cur = cur[items[i]]
        if(cur === void(0)) return
    }
    return cur
}
function setConfig(config) {
    globalConfig = config
}

export {
    loadScript,
    loadJSON,
    pad,
    getConfig,
    setConfig
}
