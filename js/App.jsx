import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'

if (global) {
  global.System = { import() {} }
}

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Match
        exactly
        pattern="/"
        component={props => <AsyncRoute
          props={props}
          loadingPromise={System.import('./Landing')}
        />}
      />
    </div>
  </Provider>
)

export default App
