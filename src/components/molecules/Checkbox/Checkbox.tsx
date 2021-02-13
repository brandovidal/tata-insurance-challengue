import React from 'react'

import './Checkbox.scss'

type CheckboxProps = {
  name: string
  text: string
  checked: boolean
  onChange: any
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  checked,
  onChange,
  text,
}) => {
  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox__text">{text}</span>
    </label>
  )
}

export default Checkbox
