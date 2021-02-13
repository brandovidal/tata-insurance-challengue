import React from 'react'

import './Form.scss'

type FormProps = {
  content: any
  onSubmit: any
}

const Form: React.FC<FormProps> = ({ content, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    {content}
  </form>
)

export default Form
