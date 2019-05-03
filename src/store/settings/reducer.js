import {SET_SETTING} from './actions'
import {updateState} from '../common-fns'

const initialState = {
  ctrEnter: false,
  language: `english`,
  theme: `light`,
  timeFormat: `HH:mm:ss`,
  user: {
    id: Math.random(),
    name: `guest0001`,
    imageUrl: `/public/images/190506.png`,
  },
}

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SETTING: {
      const {name, value} = action
      return updateState(name, value, state)
    }
    default: return state
  }
}

export default settingsReducer
