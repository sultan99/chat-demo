export const SEND_MESSAGE = `MESSAGES/SEND_MESSAGE`

export function sendMessage(receiverId, text) {
  return {
    type: SEND_MESSAGE,
    receiverId, text
  }
}
