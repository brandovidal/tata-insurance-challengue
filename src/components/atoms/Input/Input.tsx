import React from 'react'
import classNames from 'classnames'

import './Input.scss'

type StatusProps = {
  field: string
  valid: string | boolean | null
  maxlength: number
}

type InputProps = {
  type: string
  placeholder: string
  regex: RegExp
  status: StatusProps
  changeStatus: any
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  regex,
  status,
  changeStatus,
}) => {
  const onChange = (e: any) => {
    changeStatus({ ...status, field: e.target.value })
  }

  const validate = () => {
    if (regex) {
      if (!regex.test(status.field)) {
        changeStatus({ ...status, valid: false })
        return
      }
      changeStatus({ ...status, valid: true })
    }
  }

  return (
    <input
      className={classNames('input', {
        input__valid: status?.valid === true,
        input__invalid: status?.valid === false,
      })}
      type={type}
      placeholder={placeholder}
      maxLength={status.maxlength}
      onChange={onChange}
      onKeyUp={validate}
      onBlur={validate}
      autoComplete="false"
    />
  )
}

export { Input }
export type { StatusProps }
