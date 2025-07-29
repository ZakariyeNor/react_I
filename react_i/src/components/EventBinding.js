/* import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Add",
        }; */
        /* Binding the event handler in the constructor */
        /* this.handleClick = this.handleClick.bind(this) */
   /*  } */
   /*  handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Exit",
        }, ()=> {
            console.log("New header value:", this.state.introduction)
            console.log("New button value:", this.state.buttonText)
        });
        console.log(this.state.introduction)
        console.log(this.state.buttonText)
    } */

    /* Define the handler as an arrow function */
/*     handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Exit",
        }, () => {
            console.log("New header value:", this.state.introduction)
            console.log("New button value:", this.state.buttonText)
        });
        console.log(this.state.introduction)
        console.log(this.state.buttonText)
    }
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting} {this.props.option}</h1> */
                {/* Arrow fuction */}
                {/* <button onClick={() => this.handleClick()}> */}

                {/* Binding with'this' */}
                {/* <button onClick={this.handleClick.bind(this)}> */}

                {/* Binding the event handler in the constructor */}
                {/* <button onClick={this.handleClick}> */}

                {/* Define the handler as an arrow function */}
{/*                 <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding; */}