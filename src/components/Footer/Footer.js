import React from 'react'
import './Footer.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Footer.css'
const footer = props => (
  <header className="footer">
    <nav className="footer_navigation">
      <div className="footer_toggle-button">
      <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="footer_logo"><a href="/">BigELife</a></div>
      <div className="spacer"></div>
      <div className="footer_navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default footer
