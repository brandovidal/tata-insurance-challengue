import { Aside } from 'components/atoms/Aside'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import React from 'react'
import { Link } from 'react-router-dom'

import './Congratulation.scss'

const Congratulation: React.FC<any> = () => (
  <main>
    <div className="congratulation">
      <Aside />
      <section className="congratulation__section">
        <Heading
          titleThin="¡Gracias por"
          titleBold="confiar en nosotros!"
          subtitle="Queremos conocer mejor la salud de los asegurados, un asesor se pondra en contacto contigo en las sisguientes 48 horas"
        />
        <div className="congratulation__button">
          <Link to="/">
            <Button
              id="btnStart"
              type="primary"
              submit="false"
              text="Ir a salud"
            />
          </Link>
        </div>
      </section>
    </div>
  </main>
)

export default Congratulation
