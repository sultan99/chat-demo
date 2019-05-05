export const RESET_SETTINGS = `SETTINGS/RESET_SETTINGS`
export const SET_SETTING = `SETTINGS/SET_SETTING`

export const resetSettings = () => ({
  type: RESET_SETTINGS
})

export const setSetting = (name, value) => ({
  type: SET_SETTING,
  name, value
})
