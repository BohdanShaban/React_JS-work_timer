import React from 'react';

import './App.css';


class Button extends React.Component {

    constructor(props) {

        super(props); // all props from React.Component will mimicry Clock also
        
        this.MyClick = this.MyClick.bind(this); // attach MyClick   
    }

    // Event Listener -> an ordinary function in React
    MyClick() {

        document.getElementsByClassName("wrapper")[0].style.backgroundColor = "yellow";
    }
    
    render() {

        return(

            <button onClick={this.MyClick} className= "clicker">
                Change Disign
            </button>
        )
    }

}


export default Button;