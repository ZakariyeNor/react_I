import React from "react";

class StatefullGreetings extends React.Component {
    render() {
        return <h1>Hello, There {this.props.greeting} {this.props.name}</h1>
    }
}

export default StatefullGreetings;