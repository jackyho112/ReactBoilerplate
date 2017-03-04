/* global
  expect, test
**/

import reducers from './reducers'

test('@@INIT', () => {
  const state = reducers(undefined, {})
  expect(state).toEqual({})
})
