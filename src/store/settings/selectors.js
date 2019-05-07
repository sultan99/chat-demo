import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectState = R.prop(`settings`)

export const selectCtrlEnter = createSelector(
  selectState,
  R.prop(`ctrlEnter`)
)

export const selectLanguage = createSelector(
  selectState,
  R.prop(`language`)
)

export const selectTheme = createSelector(
  selectState,
  R.prop(`theme`)
)

export const selectTimeFormat = createSelector(
  selectState,
  R.prop(`timeFormat`)
)

export const selectUser = createSelector(
  selectState,
  R.prop(`user`)
)
