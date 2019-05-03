import io from 'socket.io-client'
import {SEND_MESSAGE} from './actions'
import {eventChannel} from 'redux-saga'
import {fork, put, select} from 'redux-saga/effects'
import {messageReceived} from './actions'
import {selectUser} from '../settings/selectors'
import {take, takeEvery} from 'redux-saga/effects'

const socket = io(`http://localhost:3000`)

const socketChannel = eventChannel(emit => {
  socket.on(`chat:message`, data => emit(data))
  return () => socket.close()
})

function* onMessage() {
  const appUser = yield select(selectUser)
  while (true) {
    const {author, text, time} = yield take(socketChannel)
    if (appUser.id !== author.id) {
      yield put(messageReceived(author, text, time))
    }
  }
}

function* sendMessage({type, ...data}) {
  socket.emit(`chat:message`, data)
}

function* chatSaga() {
  yield fork(onMessage)
  yield takeEvery(SEND_MESSAGE, sendMessage)
}

export default chatSaga
