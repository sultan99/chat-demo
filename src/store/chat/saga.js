import io from 'socket.io-client'
import {SEND_MESSAGE} from './actions'
import {takeLatest} from 'redux-saga/effects'

const socket = io(`http://localhost:3000`)

function* sendMessage({type, ...data}) {
  socket.emit(`chat:message`, data)
}

function* chatSaga() {
  yield takeLatest(SEND_MESSAGE, sendMessage)
}

export default chatSaga
