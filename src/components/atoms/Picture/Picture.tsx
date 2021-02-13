import React from 'react'
import getWidth from './helpers'

import './Picture.scss'

interface PictureProps {
  src: string
  width: string | number
}

const Picture: React.FC<PictureProps> = ({ src, width }) => (
  <picture className="picture">
    <img
      className="picture__img"
      src={src}
      alt=""
      style={{ maxWidth: getWidth(width) }}
    />
  </picture>
)

export default Picture
