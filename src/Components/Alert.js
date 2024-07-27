import React from 'react'

export default function Alert(props) {
  function capitalize(msg) {
    let message = msg.toLowerCase();
    return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
  }
  return (
    <>
      <div style={{ height: '50px' }}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          {capitalize(props.alert.type)} : {props.alert.msg}
        </div>}
      </div>
    </>

  )
}
