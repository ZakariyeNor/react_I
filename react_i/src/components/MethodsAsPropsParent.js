/* import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userResearch: false,
      }
    }
    clickHandler = () => {
        this.setState({
            userResearch: true,
        })
        console.log(this)
    }
    goBack = () => {
        this.setState({
            userResearch: false,
        })
    }
  render() {
    return (
      <div>
        <MethodsAsPropsChild
            userResearch={this.state.userResearch} 
            clickHandler={this.clickHandler}
            goBack={this.goBack}
        />
      </div>
    )
  }
}

export default MethodsAsPropsParent */