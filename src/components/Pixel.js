import React from 'react'

export default props => {
  return (
    <div
      className={`${props.background} pixel  ${
        props.current ? 'current-color' : ''
      }`}
      onClick={props.onClick}
    />
  )
}
