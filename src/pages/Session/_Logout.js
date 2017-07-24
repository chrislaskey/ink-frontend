import React from 'react'
import { connect } from 'react-redux'
import history from '../../app/history'
import { logout } from '../../actions/currentUser'

export const Logout = ({ onLogOut }) => {
  const onClick = () => {
    onLogOut()
    history.push('/')
  }

  return (
    <button onClick={onClick}>
      Log Out
    </button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onLogOut: () => dispatch(logout())
})

export default connect(undefined, mapDispatchToProps)(Logout)