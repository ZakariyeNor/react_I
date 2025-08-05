/* import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        category: '',
        comment: ''
      }
    } */
    /* handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleCategoryChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    } */
    /* handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmitName = (e) => {
        e.preventDefault()
        console.log('Form submitted with name:', this.state)
        
    }
  render() {
    return (
      <div>
        <h1>Fill in the form</h1>

            <form onSubmit={this.handleSubmitName}>
                <div>
                    <label htmlFor='id-name'>Name: </label>
                    <input
                        value={this.state.name}
                        onChange={this.handleChange}
                        name='name'
                        id='id-name'
                        type='text'
                    />
                </div>
                    
                <div>
                    <label htmlFor='id-category'>Choose category: </label>
                    <select
                        value={this.state.category}
                        onChange={this.handleChange}
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
                        value={this.state.comment}
                        onChange={this.handleChange}
                        name='comment'
                        id='id-comment' 
                    />
                </div>

                <input type='submit' value='Submit' />
            </form>
      </div>
    )
  }
}

export default ControlledForm */