import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectState = R.prop(`settings`)

export const selectUser = createSelector(
  selectState,
  R.prop(`user`)
)

export const selectTheme = createSelector(
  selectState,
  R.prop(`theme`)
)

export const selectTimeFormat = createSelector(
  selectState,
  R.prop(`timeFormat`)
)
