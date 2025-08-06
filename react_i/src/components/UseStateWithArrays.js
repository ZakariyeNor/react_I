/* import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3, 4]);

    const addNumValue = () => {
        setNums([...nums, nums.length + 1])
    }
    const removeNumValue = () => {
        setNums(
            nums.filter((item, index) => {
                return index !== nums.length -1;
            })
        )
    }

  return (
    <div>
        <h1>It works</h1>
        <button onClick={addNumValue}>Add value</button>
        <button onClick={removeNumValue}>Remove value</button>
        <ul>
            {
            nums.map(num => 
                <li key={num}>{num}</li>
                )
            }
        </ul>
        
    </div>
  )
}

export default UseStateWithArrays */