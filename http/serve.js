const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)

    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err

            res.end(content)
        }
    )

    if (req.url == '/contato')
        return res.end('<h1>Contato</h1>')
}).listen(5000, () => console.log('listening on port'))