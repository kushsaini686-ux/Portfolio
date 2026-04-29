const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    try{
    if(req.method==="POST" && req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.end(fs.readFileSync('./Portfolio.html','utf-8'));
    }
    else if(req.url==="/Portfolio.css"){
        res.writeHead(200,{'content-type':'text/css'});
        res.end(fs.readFileSync('Portfolio.css','utf-8'));
    }
    else{
        res.writeHead(200,{'content-type':'text/html'});
        res.end("<h1>404 Error Page<h1>");
    }}
    catch(err){
        console.log("TRY call",err);
        res.end("Server Error");
    }
});

server.listen(3000,'127.0.0.1',()=>{
    console.log("@ Running.. @");
})