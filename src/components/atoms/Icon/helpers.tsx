const ICONS_ASSETS_PATH = '/icons'

const iconMap: any = {
  check: 'check',
  mobile: 'mobile',
  plan: 'plan',
  shield: 'shield',
}

const mapType = (type: string): string =>
  `${ICONS_ASSETS_PATH}/${iconMap[type]}.png`

export default mapType
