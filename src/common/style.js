import * as R from 'ramda'

export const palette = color => (
  R.path([`theme`, color])
)

export const ifProp = (prop, a, b) => (
  R.ifElse(
    R.propEq(prop, true),
    R.always(a),
    R.always(b),
  )
)
