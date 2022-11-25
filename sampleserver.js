var http = require('http')
var fs = require('fs')
var url=require('url')

http.createServer(function (req, res) {

    var q=url.parse(req.url,true)
    // console.log(q.pathname);

    if (q.pathname === '/') {
        fs.readFile('sample.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }
    else if (q.pathname === '/signup') {
        fs.readFile('signup.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }

    else if (q.pathname === '/login') {
        fs.readFile('login.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }
    else if (q.pathname === '/index') {
        //  console.log(q.query);
         fs.readFile('index.html', function (err, data) {
             res.writeHead(200, { 'Content-Type': 'text/html' })
             res.write(data)
             res.end()
         })
    }
    else {
        res.write('not found')
        res.end()
    }

}).listen(7000, () => console.log('server started'))


