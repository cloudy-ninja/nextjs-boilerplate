import * as toggleAction from './actions'
import toggleReducer from './reducer'
import Container from './containers/Profile'
import state from './initialState'

export const actions = toggleAction
export const reducer = toggleReducer
export const Profile = Container
export const initialState = state
