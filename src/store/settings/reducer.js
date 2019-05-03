import {SET_SETTING} from './actions'
import {updateState} from 'common/reducer-fns'
import initialState from './initial-state'

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
