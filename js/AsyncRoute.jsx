import React, { Component } from 'react'

const { object } = React.PropTypes

class AsyncRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    this.props.loadingPromise.then((module) => {
      // Since it won't change, we don't wanna put in a key React would check
      this.component = module.default
      this.setState({ loaded: true })
    })
  }

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    }
    return <h1>Loading...</h1>
  }
}

AsyncRoute.propTypes = {
  props: object,
  loadingPromise: object,
}

export default AsyncRoute
