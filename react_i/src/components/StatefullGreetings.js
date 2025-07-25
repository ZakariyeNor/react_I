import React from "react";

class StatefullGreetings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Add",
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting} {this.props.option}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefullGreetings;