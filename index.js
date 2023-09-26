const proxyServer = require("./proxyServer");
const targetServer = require("./targetServer");

targetServer.listen(4000, ()=>{
    console.log('Target server running on PORT 4000')
})


proxyServer.listen(5000, ()=>{
    console.log('Proxy server running on PORT 5000')
})