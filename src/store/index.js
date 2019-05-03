import {applyMiddleware, compose, createStore} from 'redux'
import chatSaga from './chat/saga'
import createSagaMiddleware from 'redux-saga'
import devtools from './devtools'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const middlewares = compose(
  applyMiddleware(sagaMiddleware),
  devtools()
)

const store = createStore(
  reducers, middlewares
)

sagaMiddleware.run(chatSaga)

export default store
