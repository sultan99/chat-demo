import {guid, random} from 'common/utils'

const storedSettings = JSON.parse(
  localStorage.getItem(`app-settings`) || null
)

const defaultSettings = {
  ctrEnter: false,
  language: `english`,
  theme: `light`,
  timeFormat: `hh:mm:ss`,
  user: {
    id: guid(),
    name: `guest000${random(1, 100)}`,
    imageUrl: `/public/images/19050${random(2, 7)}.png`,
  },
}

export default storedSettings || defaultSettings
