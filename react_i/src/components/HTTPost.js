/* import React, { Component } from 'react'
import axios from 'axios'

export class HTTPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apiResponse: null,
            error: null
        }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'The centarl America',
                body: 'Central America is a subregion of North America. Its political boundaries are defined as bordering Mexico to the north, Colombia to the southeast, the Caribbean to the east, and the Pacific Ocean to the southwest. Central America is usually defined as consisting of seven countries: Belize, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, and Panama. Within Central America is the Mesoamerican biodiversity hotspot, which extends from southern Mexico to southeastern Panama. Due to the presence of several active geologic faults and the Central America Volcanic Arc, there is a high amount of seismic activity in the region, such as volcanic eruptions and earthquakes, which has resulted in death, injury, and property damage.',
                userId: 12345,
            }
        )
        .then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }
    render() {
        const { apiResponse } = this.state;
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    apiResponse
                        ? (
                            <div>
                                <h1>{apiResponse.title}</h1>
                                <p>post Id: {apiResponse.id}</p>
                                <p>{apiResponse.body}</p>
                                <p>user id: {apiResponse.userId}</p>
                            </div>
                        )
                        : (
                            this.state.error 
                            ? <p>{this.state.error}</p> 
                            : <h4>Please click the button above</h4>
                        )
                }
            </div>
        )
    }
}

export default HTTPost */