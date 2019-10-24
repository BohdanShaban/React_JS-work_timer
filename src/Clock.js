import React from 'react';

import logo from './logo.svg';
import './App.css';

// default function()



function ShowBanner(props) {

  if(props.time > 30) {

    return (

      <div className="rest_block">Stop Working !!!</div>
    )
  } else {

      return (

        <div className="work_block"> Work B**ch !!!</div>
      )
  }
}


class Clock extends React.Component {

  constructor(props) {

    super(props); // all props from React.Component will mimicry Clock also

    // OBJ
    this.state = {

        date: new Date()
    }
  }

  componentDidMount() {

    this.timerId = setInterval(

      () => this.tick(), // , => interval 1000ms
      1000
    )
  }

  componentWillUnmount() {

    clearInterval(this.timerId)
  }

  tick() {

    this.setState({
      
      date: new Date()
    })
  }


  // render() -> necessary in all classes
  render() {

    return( 

      <div>

        < ShowBanner time = {this.state.date.getSeconds()} />

        <h1>Current Time { this.state.date.toLocaleTimeString() } </h1>
      </div>
    )
  }
}


// export default App;
export default Clock;
