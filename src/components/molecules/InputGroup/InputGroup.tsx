import React from 'react'
import classNames from 'classnames'

import { Input } from '../../atoms/Input'

import './InputGroup.scss'

type InputGroupProps = {
  type: string
  placeholder: string
  label: string
  legend: string
  isBlock: string
  regex: RegExp
  status: any
  changeStatus: any
}

const InputGroup: React.FC<InputGroupProps> = ({
  type,
  placeholder,
  isBlock,
  legend,
  label,
  regex,
  status,
  changeStatus,
}) => (
  <div
    className={classNames('input-group', {
      'input-group__complete': isBlock === 'true',
    })}
  >
    {/* <label className="input-group__label" htmlFor={id}>
      {label}
    </label> */}
    <Input
      type={type}
      placeholder={placeholder}
      regex={regex}
      status={status}
      changeStatus={changeStatus}
    />
    <p
      className={classNames('input-group__error', {
        d__block: status?.valid === false,
      })}
    >
      {legend}
    </p>
  </div>
)

export default InputGroup
