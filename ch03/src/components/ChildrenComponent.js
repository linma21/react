import React from 'react'

export const ChildrenComponent = ({children}) => {
  return (
    <div className='ChildrenComponent'>
      <h4>ChildrenComponent</h4>
      {children}
      <hr></hr>
    </div>
  )
}
