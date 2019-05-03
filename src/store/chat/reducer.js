import * as R from 'ramda'
import {MESSAGE_RECEIVED, SEND_MESSAGE} from './actions'
import {SET_INPUT_TEXT} from './actions'
import {updateState} from '../common-fns'

const initialState = {
  inputText: ``,
  messages: [
    {
      author: {
        id: 99,
        name: `Matt Groening`,
        imageUrl: `/public/images/190503.png`,
      },
      text: `Hi there! 👋<br/> I'm Matt Groening`,
      time: new Date()
    },
    {
      author: {
        id: 99,
        name: `Matt Groening`,
        imageUrl: `/public/images/190503.png`,
      },
      text: `Welcome to our chat!`,
      time: new Date()
    }
  ],
}

const setInputText = updateState([`inputText`])

const appendMessage = message => R.over(
  R.lensProp(`messages`),
  R.append(message)
)

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED:
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
