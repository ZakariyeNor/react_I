/* import React, {useState} from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
        <div>
            <form>
                <h1>Fill in your full name</h1>
                <input 
                type='text'
                value={name.firstName}
                onChange={e => setName({
                    ...name,
                    firstName: e.target.value
                })}
                />
                <input 
                type='text'
                value={name.lastName} 
                onChange={e => setName({
                    ...name,
                    lastName: e.target.value
                })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    </div>
  )
}

export default UseStateWithObjects */