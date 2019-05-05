const req = require.context(`.`, true, /\.\/.+\/messages.js/)

const locales = req.keys().reduce((acc, key) => {
  const lng = key.replace(/\.\/(.+)\/messages.js/, `$1`)
  acc[lng] = req(key)
  return acc
}, {})

export default locales
