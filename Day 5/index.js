const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log1 = `${Date.now()}: ${req.method}: ${req.url} New Req Coming ----\n `;
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);

    fs.appendFile("log10.txt", log1, (err, data) => {
        switch(myUrl.pathname) {
            case "/":
                if(req.method === "GET")
                res.end("my HOmepage")
                break;
            case "/about":
                const userName = myUrl.query.name;
                res.end(`heyy , &{userName}`)
                break;
            case "/contact":
                res.end("Welcome to contact page");
                break;
            case "/signup":
                if(req.method === 'GET'){
                    res.end("this is a signup page")
                }else if(req.method === 'POST'){
                    res.end("success")
                }
                break;
            default: 
                res.end("404 not found");
        }
    })
})

myServer.listen(7000, ()=> console.log("started at PORT 7000"));