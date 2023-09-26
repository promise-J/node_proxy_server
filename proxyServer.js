const proxyServer = http.createServer((req, res)=>{
  const options = {
    hostname: 'localhost',
    port: 4000,
    path: req.url,
    method: req.method,
    headers: req.headers
  }

  const proxyServer = http.request(options, proxyResponse=>{
    res.writeHead(proxyResponse.statusCode, proxyResponse.headers)
    proxyResponse.pipe(res, {end: true})
  })

  req.pipe(proxyServer, {end: true})
})

module.exports = proxyServer