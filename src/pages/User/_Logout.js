import React from 'react'
import { connect } from 'react-redux'
import history from '../../app/history'
import { createFlashMessage } from '../../actions/flashMessages'
import { logout } from '../../actions/currentUser'
import { Button } from 'antd'

export const Logout = ({ flashMessage, onLogOut }) => {
  const onClick = () => {
    onLogOut()
    flashMessage('Successfully logged out', 'success')
    history.push('/')
  }

  return (
    <Button onClick={onClick}>
      Log Out
    </Button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  ),
  onLogOut: () => dispatch(logout())
})

export default connect(undefined, mapDispatchToProps)(Logout)
