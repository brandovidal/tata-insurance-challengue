import React from 'react'
import './Picture.scss'

interface PictureProps {
  src: string
}

const Picture: React.FC<PictureProps> = ({ src }) => (
  <picture className="picture">
    <img className="picture__img" src={src} alt="" />
  </picture>
)

export default Picture
