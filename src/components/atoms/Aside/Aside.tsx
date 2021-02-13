import React from 'react'
import { Item, ItemProps } from '../Item'
import Picture from '../Picture'

import './Aside.scss'

type AsideProps = {
  title?: string
  subtitle?: string
  listing?: ItemProps[]
}

const background = {
  src: '/utils/sidebar.png',
  width: '100%',
}

const shadow = {
  src: '/utils/shadow.png',
  width: 'lg',
}

const Aside: React.FC<AsideProps> = ({ title, subtitle, listing }) => (
  <aside
    className="aside"
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom',
      backgroundSize: 'cover',
      background: '#2f80ed',
    }}
  >
    <div className="aside__content">
      <div className="aside__heading">
        <h1 className="aside__title">
          <span className="aside__font--light">{title}</span>
          <b className="aside__font--bold">{subtitle}</b>
        </h1>
        <ul className="aside__listing">
          {listing?.map(({ id, src, text, size }) => (
            <Item key={id} id={id} src={src} text={text} size={size} />
          ))}
        </ul>
      </div>
      <p className="aside__copy">&copy; 2021 RIMAC Seguros y Reaseguros</p>
    </div>

    <div className="aside__img">
      <Picture src={background.src} width={background.width} />
    </div>
    <div className="aside__shadow">
      <Picture src={shadow.src} width={shadow.width} />
    </div>
  </aside>
)

export { Aside }
export type { AsideProps }
