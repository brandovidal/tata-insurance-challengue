import React from 'react'

type AsideProps = {
  title?: string
  subtitle?: string
}

const Aside: React.FC<AsideProps> = ({ title, subtitle }) => (
  <aside className="aside">
    <div className="aside__content">
      <h1 className="aside__title">
        <span className="aside__font--light">{title}</span>
        <b className="aside__font--bold">{subtitle}</b>
      </h1>
      <ul className="aside__listing">
        <li className="aside__listing">
          <img src="/home/shield.png" alt="" />
          Compralo de manera facil y rapida
        </li>
        <li>
          <img src="/home/mobile.png" alt="" />
          Cotiza y compra tu seguro 1005 digital
        </li>
        <li>
          <img src="/home/shield.png" alt="" />
          hasta S/. 12 millones de cobertura anual
        </li>
        <li>
          <img src="/home/shield.png" alt="" />
          Mas de 300 clinicas en todo el Peru
        </li>
      </ul>
    </div>
    <p className="copy">&copy; 2021 y Company</p>
  </aside>
)

export { Aside }
export type { AsideProps }
