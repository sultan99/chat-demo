import {guid, random} from 'common/utils'

const storedSettings = JSON.parse(
  localStorage.getItem(`app-settings`) || null
)

export const defaultSettings = {
  ctrlEnter: false,
  language: `en`,
  theme: `light`,
  timeFormat: `HH:mm`,
  user: {
    id: guid(),
    name: `guest000${random(1, 100)}`,
    imageUrl: `/images/19050${random(2, 7)}.png`,
  },
}

export default storedSettings || defaultSettings
