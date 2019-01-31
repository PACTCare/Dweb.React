import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buttonClicked } from '../actions/buttonActions'
import Greeting from '../components/Greeting'

class GreetingContainer extends Component {
    render() {
        return(
            <Greeting 
                buttonClick={ this.props.buttonClick } 
                displayText = { this.props.displayText } />
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        buttonClick: () => {
            dispatch(buttonClicked())
      }
    }
  }

const mapStateToProps = (state) => {
    console.log(state)
    return {
        displayText: state.button.clicked
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GreetingContainer)