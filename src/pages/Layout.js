import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { isLoggedIn } from '../reducers/currentUser'
import { Layout as LayoutComponent } from 'antd'
import Sidebar from './_Sidebar'
import './Layout.css'

import Home from './Home/Index'
import Login from './Login'
import Posts from './Posts'
import Settings from './Settings'

const Layout = ({ loggedIn }) => {
  if (!loggedIn) {
    return <Login />
  }

  return (
    <LayoutComponent className='ant-layout-has-sider window-height'>
      <Sidebar />
      <Route exact path='/' component={Home} />
      <Route path='/posts' component={Posts} />
      <Route path='/settings' component={Settings} />
    </LayoutComponent>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state)
})

export default withRouter(connect(mapStateToProps)(Layout))
