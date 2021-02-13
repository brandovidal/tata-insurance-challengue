import React from 'react'
import Icon from '../Icon'
import './Item.scss'

interface ItemProps {
  id?: number
  src: string
  text: string
  size: string
}
const Item: React.FC<ItemProps> = ({ id, src, text, size }) => (
  <li key={id} className="item">
    <Icon type={src} size={size} />
    <span className="item__text">{text}</span>
  </li>
)

export { Item }
export type { ItemProps }
