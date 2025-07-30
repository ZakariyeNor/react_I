/* import React, { Component } from 'react'
import UserObtions from './UserObtions'
import UserInfo from './UserInfo'

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userHasClearance: true,
        researchUser: true
      }
    }
  render() {
    return (
      <div>
            <UserInfo userHasClearance={this.state.userHasClearance} />
            <UserObtions researchUser={this.state.researchUser} />
      </div>
    )
  }
}

export default NestingComponents */