/* import React from 'react'

function MethodsAsPropsChild(props) {
    console.log('researchUser prop:', props.userResearch);
    return (
        <div>
            {
                props.userResearch ? (
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

                        <button onClick={props.goBack}>Go Back</button>
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

                        <button onClick={props.clickHandler}>Change</button>
                    </div>
                )
            }
        </div>
    )
}

export default MethodsAsPropsChild */