import * as R from 'ramda'
import {MESSAGE_RECEIVED, SEND_MESSAGE} from './actions'
import {SET_INPUT_TEXT} from './actions'
import {updateState} from 'common/reducer-fns'

const initialState = {
  inputText: ``,
  messages: [],
}

const setInputText = updateState([`inputText`])

const appendMessage = message => R.over(
  R.lensProp(`messages`),
  R.append(message)
)

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED: {
      const setState = appendMessage({
        author: action.author,
        text: action.text,
        time: action.time || new Date()
      })
      return setState(state)
    }
    case SEND_MESSAGE: {
      const setState = R.compose(
        setInputText(``),
        appendMessage({
          author: action.author,
          text: action.text,
          time: action.time || new Date()
        }),
      )
      return setState(state)
    }
    case SET_INPUT_TEXT: {
      return setInputText(action.value, state)
    }
    default: return state
  }
}

export default chatReducer
