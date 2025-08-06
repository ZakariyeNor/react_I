/* import React, { Component } from 'react'
import importedNames from '../names'
import names from '../names'
export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: importedNames
      }
    }
    handleNamechange = (event) => {
      const inputText = event.target.value.toLowerCase()
      const filterNames = importedNames.filter(name => {
        return name.toLowerCase().includes(inputText)
      })
      this.setState({
        names: filterNames
      })
    }
  render() {
    return (
      <div>
        <h1>
            Search Names
        </h1>
        <p>Matching names found: {this.state.names.length}</p>
        <div>
            <form>
                <label htmlFor='id-search'></label>
                <input
                    onChange={(event) => this.handleNamechange(event)}
                    id='id-search'
                    name='search'
                    placeholder='search names'
                    type='text'
                />
                <div style={{margin: 'auto'}}>
                  {this.state.names.map(name => {
                    return <p key={name}>{name}</p>
                  })}
                </div>
            </form>
        </div>
      </div>
    )
  }
}

export default SearchBar */