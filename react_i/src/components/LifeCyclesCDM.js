/* import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('constructor is called')
        super(props)

        this.state = {
            data: 'loading',
        }
    }
    getData() {
        console.log('getData() called')
        setTimeout(() => {
            console.log('Data fetched')
            this.setState({
                data: 'Loaded!'
            })
        }, 3000)
    }

    componentDidMount() {
        console.log('Component mounted')
        this.getData();
    }
    render() {
        console.log('render called')
        return (
            <div>
                <h1>
                     {this.state.data}
                </h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM */