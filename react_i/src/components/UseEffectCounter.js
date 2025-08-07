/* import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(
        () => {
            document.title = count;
        }
    );
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
    </div>
  )
}

export default UseEffectCounter */

/* Conditional useEffect Hook */
/* import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(20);
    useEffect(
        () => {
            console.log("Count 1 effect")
            document.title = count;
        }, [count]
    );
    useEffect(
        () => {
            console.log("Count 2 effect")
            document.title = count2;
        }, [count2]
    );
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
        <button onClick={
            () => setCount2(count2 => count2 - 1)
        }>
            Decrement Count ({count2})
        </button>
    </div>
  )
}

export default UseEffectCounter */

/* Running Effects only once */
/* import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);


    useEffect(
        () => {
            document.title = count;
        }
    );
    useEffect(() => {
        console.log("Creating timer");
        const interval = setInterval(() => {
            console.log("Interval executed");
            setTime(time => time + 1);
        }, 1000);
        return () => {
            console.log("Cleaning up the console");
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>The time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter */