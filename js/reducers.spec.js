import reducers from './reducers'

test('@@INIT', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({})
})
