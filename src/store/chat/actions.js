export const SEND_MESSAGE = `MESSAGES/SEND_MESSAGE`
export const SET_INPUT_TEXT = `MESSAGES/SET_INPUT_TEXT`

export function sendMessage(author, text, time) {
  return {
    type: SEND_MESSAGE,
    author, text, time
  }
}

export function setInputText(value) {
  return {
    type: SET_INPUT_TEXT,
    value
  }
}
