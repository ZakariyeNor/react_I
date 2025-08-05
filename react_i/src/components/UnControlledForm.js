/* import React, { Component } from 'react'

export class UNControlledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCate = React.createRef();
      this.inputComme = React.createRef();
    }
    handleSubmitName = (e) => {
        e.preventDefault()
        console.log(this.inputName.current.value)
        console.log(this.inputCate.current.value)
        console.log(this.inputComme.current.value)
        
    }
  render() {
    return (
      <div>
        <h1>Fill in the form</h1>

            <form onSubmit={this.handleSubmitName}>
                <div>
                    <label htmlFor='id-name'>Name: </label>
                    <input
                        name='name'
                        id='id-name'
                        type='text'
                        ref={this.inputName}
                    />
                </div>
                    
                <div>
                    <label htmlFor='id-category'>Choose category: </label>
                    <select
                        name='category'
                        id='id-category'
                        ref={this.inputCate}
                    >
                        <option value='website'>Web</option>
                        <option value='order'>Order</option>
                        <option value='general'>General</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comment'>Comment: </label>
                    <textarea
                        name='comment'
                        id='id-comment'
                        ref={this.inputComme}
                    />
                </div>

                <input type='submit' value='Submit' />
            </form>
      </div>
    )
  }
}

export default UNControlledForm */