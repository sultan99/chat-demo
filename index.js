const app = require(`express`)()
const http = require(`http`).Server(app)
const io = require(`socket.io`)(http)
const port = process.env.PORT || 3000

function onData(data) {
  const {author, text} = data
  const time = data.time || new Date()
  const message = {author, text, time}

  io.emit(`chat:message`, message)
  console.info(message)
}

io.on(`connection`, socket =>
  socket.on(`chat:message`, onData)
)

http.listen(port, () => {
  console.info(`🚀 Server ready at ${port}`)
})
