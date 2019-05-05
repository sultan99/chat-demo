export const MESSAGE_RECEIVED = `MESSAGES/MESSAGE_RECEIVED`
export const SEND_MESSAGE = `MESSAGES/SEND_MESSAGE`
export const SET_INPUT_TEXT = `MESSAGES/SET_INPUT_TEXT`
export const SET_MESSAGE_ID = `MESSAGES/SET_MESSAGE_ID`

export const messageReceived = (author, text, time) => ({
  type: MESSAGE_RECEIVED,
  author, text, time
})

export const sendMessage = (author, text, time) => ({
  type: SEND_MESSAGE,
  author, text, time
})

export const setInputText = value => ({
  type: SET_INPUT_TEXT,
  value
})

export const setMessageId = id => ({
  type: SET_MESSAGE_ID,
  id
})
