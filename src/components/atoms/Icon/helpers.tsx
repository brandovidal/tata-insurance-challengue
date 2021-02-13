const ICONS_ASSETS_PATH = '/icons'

const iconMap: any = {
  check: 'check',
  mobile: 'mobile',
  plan: 'plan',
  shield: 'shield',
}
const iconSize: any = {
  sm: 15,
  md: 26,
  lg: 30,
  xl: 40,
}

const mapType = (type: string): string =>
  `${ICONS_ASSETS_PATH}/${iconMap[type]}.png`

const mapSize = (size: string): string => iconSize[size]

export { mapType, mapSize }
