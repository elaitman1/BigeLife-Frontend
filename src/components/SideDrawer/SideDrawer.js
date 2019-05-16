import React from 'react'
import './SideDrawer.css'
import { connect } from 'react-redux'
import { clickedSection } from '/Users/ericlaitman/redux2/BigeLife-Frontend/src/actions/index.js'
class SideDrawer extends React.Component {

  handleClick = (event) => {
    this.props.clickedSection(event.target.id)
    this.props.drawerClickHandler()
    if(this.props.location.pathname === '/section'){
      this.props.history.push('/sectiontwo')
    }else if (this.props.location.pathname === '/sectiontwo'){
      this.props.history.push('/section')
    }else if(this.props.location.pathname === '/'){
      this.props.history.push('/section')
    }else if(this.props.location.pathname === '/viewchosenarticle'){
      this.props.history.push('/section')
    }else if(this.props.location.pathname === '/viewchosenarticletwo'){
      this.props.history.push('/section')
    }
  }

  render() {

  let drawerClasses = 'side-drawer'
  if (this.props.show) {
    drawerClasses = 'side-drawer open'
  }

  return (
      <nav className={drawerClasses}>
      <ul onClick={this.handleClick}>
        <li><a href="/">Home</a></li>
        <li><a id="healthandwellness">Health</a></li>
        <li><a id="finance">Finance</a></li>
        <li><a id="miscellaneous">General</a></li>

      </ul>
    </nav>
  )
}
}

const mapStateToProps =
 (state, ownProps) => {
     return {
       clickedS: state.clickedSection
     };
   }

export default connect(
  mapStateToProps,
  { clickedSection }
)(SideDrawer);
