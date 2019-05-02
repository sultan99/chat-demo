const initialState = {
  ctrEnter: false,
  language: `english`,
  theme: `light`,
  timeFormat: `hh:mm:ss`,
  user: {
    id: 1,
    name: `guest0001`,
    imageUrl: `/public/images/190506.png`,
  },
}

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}

export default settingsReducer
