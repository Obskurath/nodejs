import { log } from 'console';
import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/plain"})
    res.end('Hello World ')

});
server.listen(3000, () => {
    log("Servidor Inciado")
})
