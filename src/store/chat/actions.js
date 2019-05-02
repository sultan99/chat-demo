export const SEND_MESSAGE = `MESSAGES/SEND_MESSAGE`
export const SET_INPUT_TEXT = `MESSAGES/SET_INPUT_TEXT`

export const sendMessage = (author, text, time) => ({
  type: SEND_MESSAGE,
  author, text, time
})

export const setInputText = value => ({
  type: SET_INPUT_TEXT,
  value
})
