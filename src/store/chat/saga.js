import {SEND_MESSAGE} from './actions'
import botDialogs from './bots'
import io from 'socket.io-client'
import {delay, take, takeEvery} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import {fork, put} from 'redux-saga/effects'
import {messageReceived} from './actions'

const socket = io(`http://localhost:3000`)

const socketChannel = eventChannel(emit => {
  socket.on(`chat:message`, data => emit(data))
  return () => socket.close()
})

function* startBots() {
  for (let [{author, text}, pause] of botDialogs) {
    yield put(messageReceived(author, text))
    yield delay(pause)
  }
}

function* onMessage() {
  while (true) {
    const {author, text, time} = yield take(socketChannel)
    yield put(messageReceived(author, text, time))
  }
}

function* sendMessage({type, ...data}) {
  socket.emit(`chat:message`, data)
}

function* chatSaga() {
  yield fork(startBots)
  yield fork(onMessage)
  yield takeEvery(SEND_MESSAGE, sendMessage)
}

export default chatSaga
