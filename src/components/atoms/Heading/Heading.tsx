import React from 'react'

import './Heading.scss'

type HeadingProps = {
  titleThin: string
  titleBold: string
  subtitle: string
}

const Heading: React.FC<HeadingProps> = ({
  titleThin,
  titleBold,
  subtitle,
}) => (
  <div className="heading">
    <h3 className="heading__title">
      <span className="heading__title--thin">{titleThin}</span>
      <span className="heading__title--bold">{titleBold}</span>
    </h3>
    <p className="heading__subtitle">{subtitle}</p>
  </div>
)

export default Heading
