const initialState = {
  user: {
    id: 1,
    name: `guest0001`
  },
  theme: `light`,
  clockDisplay: 12,
  ctrEnter: false,
  language: `english`
}

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}
