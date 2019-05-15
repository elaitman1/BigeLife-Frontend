import React from 'react'
import Time from 'react-time'


export default class Date extends React.Component {

  render() {
    let now = new Date()
    // let wasDate = new Date("Thu Jul 18 2013 15:48:59 GMT+0400")
    // <p>This was <Time value={wasDate} titleFormat="YYYY/MM/DD HH:mm" relative /></p>
    return (
      <div>
        <p className='date'><Time value={now} format="MM/DD/YYYY" /></p>
      </div>
    )
  }
}
