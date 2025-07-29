import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <h1>{props.user ? 'user' : 'admin'}</h1>
    </div>
  )
}

export default ConditionalRenderingFunctional