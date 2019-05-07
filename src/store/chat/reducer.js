import {MESSAGE_RECEIVED} from './actions'
import {SET_INPUT_TEXT, SET_MESSAGE_ID} from './actions'
import {appendState, updateState} from 'common/reducer-fns'
import {guid} from 'common/utils'

const initialState = {
  inputText: ``,
  lastMessageId: null,
  messages: [],
}

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED: {
      const newMessage = {
        id: guid(),
        author: action.author,
        text: action.text,
        time: action.time || new Date()
      }
      return appendState(
        `messages`, newMessage, state
      )
    }
    case SET_INPUT_TEXT: {
      return updateState(
        `inputText`, action.value, state
      )
    }
    case SET_MESSAGE_ID: {
      return updateState(
        `lastMessageId`, action.id, state
      )
    }
    default: return state
  }
}

export default chatReducer
