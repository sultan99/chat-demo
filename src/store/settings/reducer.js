import * as R from 'ramda'
import {SET_SETTING} from './actions'

const initialState = {
  ctrEnter: false,
  language: `english`,
  theme: `light`,
  timeFormat: `HH:mm:ss`,
  user: {
    id: 1,
    name: `guest0001`,
    imageUrl: `/public/images/190506.png`,
  },
}

const setState = R.curry((path, value, state) =>
  R.set(
    R.lensPath(path),
    value, state
  )
)

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SETTING: {
      const {name, value} = action
      return setState(name, value, state)
    }
    default: return state
  }
}

export default settingsReducer
