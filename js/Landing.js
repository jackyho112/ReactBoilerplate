import React from 'react'
import { connect } from 'react-redux'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        SUP
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
