import {RESET_SETTINGS, SET_SETTING} from './actions'
import {updateState} from 'common/reducer-fns'
import initialState from './initial-state'
import {defaultSettings} from './initial-state'

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_SETTINGS: {
      return defaultSettings
    }
    case SET_SETTING: {
      const {name, value} = action
      return updateState(name, value, state)
    }
    default: return state
  }
}

export default settingsReducer
