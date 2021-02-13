import React from 'react'
import Picture from '../Picture'
import mapType from './helpers'

interface IconProps {
  type: string
}

const Icon: React.FC<IconProps> = ({ type }) => (
  <div className="icon">
    <Picture src={mapType(type)} />
  </div>
)

export default Icon
