/* import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
  constructor(props) {
    super(props)
    console.log('Child constructor called')

    this.state = {
      greeting: 'Child World',
    }
  }

  // Arrow function automatically binds `this`
  updateGreeting = () => {
    console.log('Child update greeting called')
    this.setState(prevState => ({
      greeting: prevState.greeting === 'Child World' ? 'Child Hello' : 'Child World'
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Child component updated')
    console.log('Prev Props', prevProps)
    console.log('Prev State', prevState)
    if (prevProps.parentGreeting !== this.props.parentGreeting){
      console.log('Parent Greeting has changed')
    }
  }

  render() {
    console.log('Child Render method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Child Update</button>
      </div>
    )
  }
}

export default LifeCyclesCDUChild
 */