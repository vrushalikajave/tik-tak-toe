import React from 'react'
import "./style.css"

const Box = (props) => {
    const classes= (props.className ? `${props.className} square` : `square`)
  return (

        <span
            className= {classes + (props.state==="x" ? `fc-red` : `fc-yellow`)}
            onClick ={ () =>props.onClick(props.index)}>
        </span>
  )
}

export default Box
