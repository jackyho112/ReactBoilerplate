/* global
  window
**/

import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
)

export default store
