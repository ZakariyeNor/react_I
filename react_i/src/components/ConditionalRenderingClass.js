import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userHasClearance: false,
        researchUser: false
      }
    }
  render() {
    return (
      <div>
            <h1>{this.state.userHasClearance ? 'Adminatrator' : 'Customer User'}</h1>
            {this.state.researchUser ? (
                <div>
                    <h5>'Reporter'</h5>
                    <p>Choose from this list what do you want research:</p>
                    <ul>
                        <li>
                            Art
                        </li>
                        <li>
                            Psychology
                        </li>
                        <li>
                            Engineering
                        </li>
                        <li>
                            Science
                        </li>
                    </ul>
                </div>
                ) : (
                    <div>
                        <h5>'Higher level admin'</h5>
                        <p>Which research do you want to add more or update:</p>
                        <ul>
                            <li>
                                Art
                            </li>
                            <li>
                                Psychology
                            </li>
                            <li>
                                Engineering
                            </li>
                            <li>
                                Science
                            </li>
                        </ul>
                    </div>
                    )
            }
      </div>
    )
  }
}

export default ConditionalRenderingClass