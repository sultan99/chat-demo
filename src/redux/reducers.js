import {combineReducers} from 'redux'
import chat from './chat/reducer'
import settings from './settings/reducer'

export default combineReducers({
  chat,
  settings
})
