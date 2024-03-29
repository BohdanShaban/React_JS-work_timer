import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';          
import Clock from './Clock';   
import Button from './Button'; // => default !!!
import * as serviceWorker from './serviceWorker';

//////  START


// classes
class App extends React.Component {

    render() {

        return(

            <div className= "wrapper">
                
                < Clock /> 
                < Button />
            </div>
        )
    }
}




ReactDOM.render(< App />, document.getElementById('root') );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// CERNETKA
//
// {/* < Clock /> */} => CTRL + K + C