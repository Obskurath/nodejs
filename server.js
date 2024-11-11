import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.writeHead(200, {"content-type" : "text/plain"})
    res.end('Hello World ') 

});
server.listen(3000, () => {
    console.log("Servidor Inciado")
})

asdasd