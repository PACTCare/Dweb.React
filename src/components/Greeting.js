import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ buttonClick, displayText }) => {
    return(
        <div>
            <br />
            <div align="center">Hello React & Redux, welcome on dWeb!</div>
            <br />
            <div align="center">
                <button onClick={ buttonClick }>Push the button!</button>
            </div>
            <br />
            { 
                displayText ? <div align="center"><h3>Let's get something done!</h3></div> : "" 
            }
        </div>
    )    
}

export default Greeting;