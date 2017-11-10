import { connect } from 'react-redux'
import { toggleHandler } from '../actions'
import Component from '../component/Profile'

const mapDispatchToProps = dispatch => ({
  toggleHandler: () => dispatch(toggleHandler()),
})

export default connect(state => state.toggle, mapDispatchToProps)(Component)
