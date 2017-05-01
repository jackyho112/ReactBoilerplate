import React from 'react'
import propTypes from 'prop-types'

const Test = ({ name, number, stuff }) => (
  <div className="landing">
    {`${name}-${number}-${stuff}`}
  </div>
)

Test.propTypes = {
  name: propTypes.oneOf([
    propTypes.bool,
    propTypes.string
  ]),
  number: propTypes.oneOf([
    propTypes.bool,
    propTypes.string
  ]),
}

export default Test
