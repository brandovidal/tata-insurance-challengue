import React from 'react'

import './Dropdown.scss'

type DropdownProps = {
  value: string
  options: string[]
}

const onChange = (e: any) => {
  // console.log('Dropdown ', e)
}

const Dropdown: React.FC<DropdownProps> = ({ value, options }) => (
  <div className="dropdown">
    <select className="dropdown__select" value={value} onChange={onChange}>
      {options.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  </div>
)

export default Dropdown
