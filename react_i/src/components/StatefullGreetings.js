import React from "react";

class StatefullGreetings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Add",
        };
    }
    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Exit",
        }, ()=> {
            console.log("New header value:", this.state.introduction)
            console.log("New button value:", this.state.buttonText)
        });
        console.log(this.state.introduction)
        console.log(this.state.buttonText)
    }
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting} {this.props.option}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefullGreetings;