import * as R from 'ramda'

const lens = R.ifElse(
  R.is(String),
  R.lensProp,
  R.lensPath
)

export const appendState = R.curry((path, value, state) =>
  R.over(
    lens(path),
    R.append(value),
    state
  )
)

export const updateState = R.curry((path, value, state) =>
  R.set(
    lens(path),
    value, state
  )
)
