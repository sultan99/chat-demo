import {RESET_SETTINGS, SET_SETTING} from './actions'
import {defaultSettings} from './initial-state'
import {select} from 'redux-saga/effects'
import {selectState} from '../settings/selectors'
import {takeEvery} from 'redux-saga/effects'

function* resetSettings() {
  storeSettings(defaultSettings)
}

function* setSetting() {
  const data = yield select(selectState)
  storeSettings(data)
}

function* storeSettings(data) {
  const json = JSON.stringify(data)
  localStorage.setItem(`app-settings`, json)
}

function* settingsSaga() {
  yield takeEvery(RESET_SETTINGS, resetSettings)
  yield takeEvery(SET_SETTING, setSetting)
}

export default settingsSaga
