/* import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comment, setComment] = useState('');
    const handleSubmitName = (e) => {
        e.preventDefault();
        console.log(name, category, comment)
    }


    return (
        <div>
            <h1>Fill in the form</h1>

            <form onSubmit={handleSubmitName}>
                <div>
                    <label htmlFor='id-name'>Name: </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        id='id-name'
                        type='text'
                    />
                </div>

                <div>
                    <label htmlFor='id-category'>Choose category: </label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        name='category'
                        id='id-category'
                    >
                        <option value='website'>Web</option>
                        <option value='order'>Order</option>
                        <option value='general'>General</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comment'>Comment: </label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        name='comment'
                        id='id-comment'
                    />
                </div>

                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default ControlledFormHooks */