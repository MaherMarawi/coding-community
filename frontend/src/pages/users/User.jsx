import React from 'react'

const User = ({user}) => {
  return (
    <div className="container">
        <div className='user'>{user.email} :: {user.username}</div>
    </div>
  )
}

export default User