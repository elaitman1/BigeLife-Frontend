import React from 'react'
import Time from 'react-time'


export default class Date extends React.Component {

  render() {
    let now = new Date()
    return (
      <div>
        <p className='date'><Time value={now} format="MM/DD/YYYY" /></p>
      </div>
    )
  }
}
