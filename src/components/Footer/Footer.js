import React from 'react'
import './Footer.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Footer.css'
// <DrawerToggleButton click={props.drawerClickHandler}/>
const footer = props => (
  <div className="footer">
    <nav className="footer_navigation">
      <div className="footer_toggle-button">
      </div>
      <div className="footer_logo"><a href="/"></a></div>
      <div className="spacer"></div>
      <div className="footer_navigation-items">
        <ul>
        </ul>
      </div>
    </nav>
  </div>
)

export default footer
