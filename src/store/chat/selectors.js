import * as R from 'ramda'
import {createSelector} from 'reselect'
import {format} from 'date-fns'
import {selectTimeFormat} from '../settings/selectors'

export const selectState = R.prop(`chat`)

export const selectInputText = createSelector(
  selectState,
  R.prop(`inputText`)
)

export const selectMessages = createSelector(
  selectState,
  R.prop(`messages`)
)

export const selectMessageFeed = createSelector(
  selectTimeFormat,
  selectMessages,
  (timeFormat, messages) => messages.reduce((acc, next) => {
    const last = R.last(acc)
    if (last && last.author.id === next.author.id) {
      last.texts.push(next.text)
      last.time = format(next.time, timeFormat)
    }
    else {
      acc.push({
        author: next.author,
        texts: [next.text],
        time: format(next.time, timeFormat)
      })
    }
    return acc
  }, [])
)
