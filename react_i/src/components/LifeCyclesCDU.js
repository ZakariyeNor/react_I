/* import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('Parent constructor called')
        super(props)

        this.state = {
            greeting: 'World',
        }
    }
    updateGreeting = () => {
        console.log('update method is called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'World' ? 'Hello' : 'World'
            }
        })
    }
    componentDidUpdate() {
        console.log('Component updated')
    }
    render() {
        console.log('Parent render called')
        return (
            <div>
                <h1>
                     {this.state.greeting}
                </h1>
                <button onClick={this.updateGreeting}>Update</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
            </div>
        ) 
    }
}

export default LifeCyclesCDU */