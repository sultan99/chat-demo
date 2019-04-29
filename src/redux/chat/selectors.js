import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectState = R.prop(`chat`)

export const selectMessages = () => createSelector(
  selectState,
  R.prop(`messages`)
)
