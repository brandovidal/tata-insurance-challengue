import React from 'react'
import Picture from '../Picture'
import { mapSize, mapType } from './helpers'

import './Icon.scss'

interface IconProps {
  type: string
  size: string
}

const Icon: React.FC<IconProps> = ({ type, size }) => (
  <div className="icon">
    <Picture src={mapType(type)} width={mapSize(size)} />
  </div>
)

export default Icon
