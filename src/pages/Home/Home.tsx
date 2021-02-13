/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

import { Aside, AsideProps } from '../../components/atoms/Aside/Aside'
import Button from '../../components/atoms/Button'
import Dropdown from '../../components/atoms/Dropdown'
import Heading from '../../components/atoms/Heading'
import Checkbox from '../../components/molecules/Checkbox'
import Form from '../../components/molecules/Form'
import InputGroup from '../../components/molecules/InputGroup/InputGroup'

import './Home.scss'

const Home: React.FC = () => {
  const history = useHistory()

  const aside: AsideProps = {
    title: 'Seguro de',
    subtitle: 'Salud',
    copy: '&copy; 2021 RIMAC Seguros y Reaseguros',
    listing: [
      {
        id: 1,
        src: 'shield',
        text: 'Cómpralo de manera fácil y rápida',
        size: 'md',
      },
      {
        id: 2,
        src: 'mobile',
        text: 'Cotiza y compra tu seguro 1005 digital',
        size: 'md',
      },
      {
        id: 3,
        src: 'shield',
        text: 'Hasta S/. 12 millones de cobertura anual',
        size: 'md',
      },
      {
        id: 4,
        src: 'shield',
        text: 'Más de 300 clinicas en todo el Perú',
        size: 'md',
      },
    ],
  }

  const options: string[] = ['DNI', 'RUC']

  const [document, changeDocument] = useState({
    field: '',
    valid: null,
    maxlength: 12,
  })
  const [date, changeDate] = useState({
    field: '',
    valid: null,
    maxlength: 10,
  })
  const [phone, changePhone] = useState({
    field: '',
    valid: null,
    maxlength: 12,
  })

  const [terms, changeTerms] = useState(false)
  const [save, changeSave] = useState(false)
  const [formValid, changeFormValid] = useState<boolean | null>(null)

  const onChangeTerms = (e: any) => {
    changeTerms(e.target.checked)
  }
  const onChangeSave = (e: any) => {
    changeSave(e.target.checked)
  }

  const expressions = {
    document: /^\d{8,12}$/,
    phone: /^\d{9,12}$/,
    date: /^[0-9-]{9,12}$/,
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const legends = {
    document:
      'El documento solo puede contener números y debe tener de 8 a 12 dígitos.',
    phone:
      'El celular solo puede contener números y debe tener de 9 a 12 dígitos.',
    date:
      'La fecha solo puede contener números y debe tener de 10 a 12 dígitos.',
    user:
      'El usuario tiene que ser de 4 a 16 dúgitos y solo pueden contener numeros, letras y guion bajo',
    email:
      'El correo solo puede contener letras, números, puntos, guiones y guíon bajo.',
    password: 'La contraseña tiene que ser de 4 a 12 dígitos. ',
    password2: 'Ambas contraseñas deben ser iguales.',
    name:
      'El nombre tiene que ser de 2 a 40 digitos y solo pueden contener letras y espacios, asimismo pueden llevar acentos',
  }

  const onSubmit = (e: any) => {
    const form = e.target
    e.preventDefault()

    const fields = [document, date, phone]
    const changes = [changeDocument, changeDate, changePhone]
    const valid =
      fields.filter((line) => line.valid).length === fields.length &&
      terms &&
      save

    // console.log('onSubmit ', valid)
    changeFormValid(valid)

    if (valid) {
      form.reset()
      changes.map((change) => change({ field: '', valid: null, maxlength: 12 }))
      history.push('/congratulation')
    }
  }

  return (
    <main>
      <div className="sidebar">
        <Aside
          title={aside.title}
          subtitle={aside.subtitle}
          listing={aside.listing}
        />
        <Form
          onSubmit={onSubmit}
          content={
            <div>
              <Heading
                titleThin="Obten tu"
                titleBold="seguro ahora"
                subtitle="Ingresa los datos para comenzar"
              />

              <div className="form__content">
                <div className="form__input">
                  <Dropdown options={options} value="DNI" />
                  <InputGroup
                    type="tel"
                    placeholder="Nro de documento"
                    legend={legends.document}
                    isBlock=""
                    label=""
                    regex={expressions.document}
                    status={document}
                    changeStatus={changeDocument}
                  />
                </div>
                <div className="form__input">
                  <InputGroup
                    type="date"
                    placeholder="Fecha de nacimiento"
                    legend={legends.date}
                    isBlock="true"
                    label=""
                    regex={expressions.date}
                    status={date}
                    changeStatus={changeDate}
                  />
                </div>
                <div className="form__input">
                  <InputGroup
                    type="tel"
                    placeholder="Celular"
                    legend={legends.phone}
                    isBlock="true"
                    label=""
                    regex={expressions.phone}
                    status={phone}
                    changeStatus={changePhone}
                  />
                </div>
              </div>

              <div className="form__terms">
                <Checkbox
                  name="termSend"
                  checked={terms}
                  onChange={onChangeTerms}
                  text="Acepto la Politica de Proteccion de datos Personales y los
                      Términos y Condiciones"
                />
                <Checkbox
                  name="termSave"
                  checked={save}
                  onChange={onChangeSave}
                  text="Acepto la Politica de Envío de Comunicaciones Comerciales"
                />

                <div className="form__group">
                  <Button
                    id="btnSubmit"
                    type="primary"
                    submit="true"
                    text="Comencemos"
                  />
                  <label className="form__label" htmlFor="btnSubmit">
                    {formValid === null
                      ? ''
                      : formValid === true
                      ? 'Formulario enviado exitosamente'
                      : 'Por favor rellene correctamente el formulario'}
                  </label>
                </div>
              </div>
            </div>
          }
        >
          hola
        </Form>
      </div>
    </main>
  )
}

export default Home
