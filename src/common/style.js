import * as R from 'ramda'

export const ifProp = (prop, a, b) => (
  R.ifElse(
    R.propEq(prop, true),
    R.always(a),
    R.always(b),
  )
)

export const palette = color => (
  R.path([`theme`, color])
)

export const prop = (name, defValue) => (
  R.ifElse(
    R.has(name),
    R.prop(name),
    R.always(defValue),
  )
)
