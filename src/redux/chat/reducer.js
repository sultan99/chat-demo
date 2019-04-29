const initialState = {
  messages: [
    {
      id: 1,
      text: `Welcome to chat!`,
      time: new Date(),
      status: `sent`,
      userId: 100
    },
  ],
  lastMessageId: 1
}

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}
