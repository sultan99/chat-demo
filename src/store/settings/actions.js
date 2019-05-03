export const SET_SETTING = `SETTINGS/SET_SETTING`

export const setSetting = (name, value) => ({
  type: SET_SETTING,
  name, value
})
