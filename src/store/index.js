import {createStore} from 'redux'
import reducers from './reducers'

let middlewares

if (process.env.NODE_ENV === `development`) {
  const devtools = `__REDUX_DEVTOOLS_EXTENSION__`
  middlewares = window[devtools] && window[devtools]()
}

const store = createStore(
  reducers, middlewares
)

export default store
