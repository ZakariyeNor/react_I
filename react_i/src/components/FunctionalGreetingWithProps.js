import React from "react";
import App from "../App";


/* function FunctionalGreetingWithProps() {
    return <h1>Hello</h1>
} */

const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hello, {props.name} {props.greeting} {props.age}</h1>;
}

export default FunctionalGreetingWithProps;