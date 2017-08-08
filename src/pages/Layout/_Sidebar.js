import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, Layout, Menu } from 'antd'
import { updatePreferences } from '../../actions/currentUser'
import { getPreference } from '../../reducers/currentUser'

export const Sidebar = ({ sidebarCollapsed, toggleSidebar }) => (
  <Layout.Sider
    id='sidebar'
    className='window-height'
    collapsible
    collapsed={sidebarCollapsed}
    onCollapse={(collapsed) => toggleSidebar(collapsed)}
    width='240'
  >
    <div className='section-heading' />
    <div className='scroll-container'>
      <Menu
        id='main-nav'
        mode='inline'
        defaultSelectedKeys={['notes2']}
        defaultOpenKeys={['notes2']}
      >
        <Menu.Item key='0'>
          <Link to='/'>
            <Icon type='home' />
            <span className='nav-text'>
              Home
            </span>
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          key='notes'
          title={<Link to='/notes'><Icon type='mail'/><span className='nav-text'> Notes</span></Link>}
        >
          <Menu.Item key='1'>
            <Link to='/notes'>All</Link>
          </Menu.Item>
          <Menu.ItemGroup key='labels' title='Labels'>
            <Menu.Item key='one'>One</Menu.Item>
            <Menu.Item key='two'>Two</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item key='settings'>
          <Link to='/settings'>
            <Icon type='setting' />
            <span className='nav-text'>
              Settings
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  </Layout.Sider>
)

Sidebar.displayName = 'Sidebar'

const mapStateToProps = (state) => {
  const sidebarDefault = window.innerWidth <= 1000
  const sidebarState = getPreference(state, 'sidebarCollapsed')
  const sidebarSet = sidebarState !== undefined

  return {
    sidebarCollapsed: sidebarSet ? sidebarState : sidebarDefault
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (sidebar) => dispatch(
    updatePreferences({ sidebarCollapsed: sidebar })
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
