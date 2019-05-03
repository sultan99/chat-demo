import * as R from 'ramda'

export const updateState = R.curry((path, value, state) =>
  R.set(
    R.lensPath(path),
    value, state
  )
)
