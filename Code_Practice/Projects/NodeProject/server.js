var http = require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function (req, res) {
    let adr=url.parse(req.url,true);
    console.log(adr);
    
    http.write(adr);
    http.end();
   
}).listen(8080);