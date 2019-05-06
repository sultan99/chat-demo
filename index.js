const express = require(`express`)
const app = express()
const fs = require(`fs`)
const http = require(`http`).Server(app)
const io = require(`socket.io`)(http)
const port = process.env.PORT || 3000

app.use(express.static(`public`))

app.use(`*`, (req, res) => {
  fs.createReadStream(`./public/index.html`).pipe(res)
})

io.on(`connection`, socket =>
  socket.on(`chat:message`, data => {
    const {author, text} = data
    const time = data.time || new Date()
    const message = {author, text, time}
    io.emit(`chat:message`, message)
  })
)

http.listen(port, () => {
  console.info(`🚀 Server ready at ${port}`)
})
