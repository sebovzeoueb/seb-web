const Uws = require('uWebSockets.js')
const Fs = require('fs').promises

const serv = Uws.App()

const read = path => Fs.readFile(`src${path}`)
.catch(err => error(404))

// Try to read the error page from the user's website, then from the defaults, then return unknown error if code isn't handled at all
const error = code => Fs.readFile(`src/errors/${code}.html`)
.catch(err => Fs.readFile(`errors/${code}.html`))
.catch(err => `Unknown error: ${code}`)

const contentType = (path, response) => {
  const split = path.split('.')
  return Fs.readFile('content-type.json')
  .then(res => {
    const json = JSON.parse(res)
    const header = json[split[split.length-1]]
    if (header) response.writeHeader('Content-Type', header)
  })
}

serv.get('/', (res, req)=>{
  res.onAborted()
  read('/index.html').then(file => res.end(file))
})

serv.get('/*', (res, req)=>{
  res.onAborted()
  let path = req.getUrl()
  contentType(path, res)
  read(path).then(file => res.end(file))
})

serv.listen(80, ()=>{})