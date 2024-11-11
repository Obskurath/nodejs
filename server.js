import { log } from 'console';
import http from 'http'

const routes = {
    '/':'Formacion Node + Express + MongoDB',
    '/authors': 'These are the authors',
    '/books': 'These are the books'
}

const server = http.createServer((req, res) => {
    console.log(req.url);
    
    res.writeHead(200, {"content-type" : "text/html"})
    res.end(routes[req.url]) 

});
server.listen(3000, () => {
    console.log("Server Ready!")
})


