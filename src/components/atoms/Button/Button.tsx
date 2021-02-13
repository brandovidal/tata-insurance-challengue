import React from 'react'
import classNames from 'classnames'

import './Button.scss'

type ButtonProps = {
  id: string
  submit: string | boolean
  text: string
  type: string
}

const Button: React.FC<ButtonProps> = ({ id, submit, text, type }) => (
  <button
    className={classNames('button', {
      [`type-${type}`]: type,
    })}
    id={id}
    type={submit ? 'submit' : 'button'}
  >
    {text}
  </button>
)

export default Button
