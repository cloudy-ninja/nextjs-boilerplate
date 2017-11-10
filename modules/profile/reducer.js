/* eslint-disable fp/no-nil */
import { TOGGLE } from './actions'

export default (state = { toggle: false }, action) => {
  switch (action.type) {
    case TOGGLE: return { toggle: !state.toggle }
    default: return state
  }
}
