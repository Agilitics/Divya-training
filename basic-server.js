/*--const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type' : 'text/html' })
    fs.readFile('ex.html', function(error,data){
        if (error) {
            res.writeHead(404)
            res.write('Error : File Not Found')
        } else {
            res.write(data)
        }
        res.end()

    })
})
server.listen(port,function(error){
    if(error){
        console.log('Something went wrong', error)

    }
else {
    console.log('Server is listening on port' + port)
}
})--*/

const http = require('http')

const server = http.createServer(function(req, res){
    res.setHeader('Content-type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.writeHead(200)

    let dataObj = {"id":123, "name":"Jill", "email":"Jillstacker@gmail.com"}
    let data = JSON.stringify(dataObj)
    res.end(data)
})

server.listen(3000, function(){
    console.log("Listening on port 3000")
})