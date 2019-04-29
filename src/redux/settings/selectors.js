import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectState = R.prop(`settings`)

export const selectUser = () => createSelector(
  selectState,
  R.prop(`user`)
)
