import {SET_SETTING} from './actions'
import {select} from 'redux-saga/effects'
import {selectState} from '../settings/selectors'
import {takeEvery} from 'redux-saga/effects'

function* storeSettings() {
  const data = yield select(selectState)
  const json = JSON.stringify(data)
  localStorage.setItem(`app-settings`, json)
}

function* settingsSaga() {
  yield takeEvery(SET_SETTING, storeSettings)
}

export default settingsSaga
