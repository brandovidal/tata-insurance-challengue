import React from 'react'
import './App.scss'
import { Aside, AsideProps } from './components/atoms/Aside/Aside'

const App: React.FC = () => {
  const aside: AsideProps = {
    title: 'Seguro de',
    subtitle: 'Salud',
  }

  return (
    <main>
      <Aside title={aside.title} subtitle={aside.subtitle} />

      <form noValidate>
        <h3>
          Obten tu <span className="text-primary">seguro ahora</span>
        </h3>
        <p>Ingresa los datos para comenzar</p>
        <div>
          <div>
            <select name="" id="">
              <option value="DNI">DNI</option>
              <option value="RUC">RUC</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="nro de documento" />
          </div>
        </div>
        <div>
          <div>
            <input type="date" placeholder="Fecha de nacimiento" />
          </div>
        </div>
        <div>
          <div>
            <input type="tel" placeholder="Celular" />
          </div>
        </div>

        <div>
          <input type="checkbox" name="termSave" id="termSave" />
          <label htmlFor="termSave">
            Acepto la Politica de Proteccion de datos Personales y los Termino y
            Condiciones
          </label>
        </div>

        <div>
          <input type="checkbox" name="termSend" id="termSend" />
          <label htmlFor="termSend">
            Acepto la Politica de Envio de Comunicaciones Comerciales
          </label>
        </div>
      </form>
    </main>
  )
}

export default App
