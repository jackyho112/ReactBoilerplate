import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'

if (global) {
  global.System = { import() {} }
}

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route
        exact
        path="/"
        component={props => <AsyncRoute
          props={props}
          loadingPromise={System.import('./Landing')}
        />}
      />
    </div>
  </Provider>
)

export default App
