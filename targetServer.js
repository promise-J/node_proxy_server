const fs = require('fs')
const http = require('http')

const targetServer = http.createServer((req, res)=>{
    let filePath = __dirname
    const fileExt = '.html'
    filePath = req.url == '/' ? filePath + '/pages/index' + fileExt : filePath + '/pages' + req.url + fileExt
    
    if(req.url=='/'){
        const file = fs.createReadStream(filePath)
        res.writeHead(201, {'Content-Type': 'text/html'})
        file.pipe(res)
    }else if(req.url=='/about'){
        const file = fs.createReadStream(filePath)
        res.writeHead(201, {'Content-Type': 'text/html'})
        file.pipe(res)
    }else if(req.url=='/contact'){
        const file = fs.createReadStream(filePath)
        res.writeHead(201, {'Content-Type': 'text/html'})
        file.pipe(res)
    }else{
        filePath = __dirname + '/notfound' + fileExt
        const file = fs.createReadStream(filePath)
        res.writeHead(201, {'Content-Type': 'text/html'})
        file.pipe(res)
    }
})

module.exports = targetServer
