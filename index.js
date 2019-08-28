const Uws = require('uWebSockets.js')
const Fs = require('fs')

const serv = Uws.App()

serv.get('/', (res, req)=>{
  res.onAborted()
  Fs.readFile('src/index.html', (err, data)=>{
    res.end(data)
  })
})

serv.get('/*', (res, req)=>{
  res.onAborted()
  Fs.readFile(`src${req.getUrl()}`, (err, data)=>{
    if (err) return res.end('404 File Not Found')
    res.end(data)
  })
})

serv.listen(80, ()=>{})