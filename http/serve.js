const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : 'api.js'


    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    if (!allowed) return

    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw console.log(err)

            res.end(content)
        }
    )


}).listen(80, () => console.log('acess localhost:80'))

// var app = http.createServer(function (req, res) {

//     fs.write('public/api.js', req.url.toString().replace("/", ""), (err) => {
//         if (err) throw err;
//     });

// });
// app.listen(3000);