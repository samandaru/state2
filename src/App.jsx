import React, { Component } from 'react'
import './style.css'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      isActiv: 'week',

    }
  }
  render() {
   const change = (title) => {
     this.setState({isActiv: title})
   }
    
    return (
      <div>
      <div className="wrapper" >
        <div 
          onClick={()=> change('today') }
          className={`title ${this.state.isActiv === 'today' && 'activ'}`}>Today</div>
        <div 
          onClick={()=> change('week') }
          className={`title ${this.state.isActiv === 'week' && 'activ'}`}>Week</div>
        <div 
          onClick={()=> change('month') }
          className={`title ${this.state.isActiv === 'month' && 'activ'}`}>Month</div>
        </div>
        {this.state.isActiv === 'today' && <h1>Todays news</h1>}
        {this.state.isActiv === 'week' && <h1>Weeks news</h1>}
        {this.state.isActiv === 'month' && <h1>Months news</h1>}
      </div>
    )
  }
}

