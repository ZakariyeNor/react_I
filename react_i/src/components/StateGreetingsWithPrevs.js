/* import React from "react";

class StatefullGreetingsWithPrevs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Add",
            count: 0,
        };
    }
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Props:", prevProps)
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Add" ? "Exit" : "Add",
            }
        },)
    }

    incrementButton() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Props:", prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting} {this.props.option}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementButton()}>Increment</button>
                <p>Youve added the value to {this.state.count}</p>
            </div>
        )
    } 
}

export default StatefullGreetingsWithPrevs; */