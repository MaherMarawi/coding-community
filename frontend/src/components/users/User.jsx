import React from 'react'
import DeleteUser from './DeleteUser'
import UpdateUser from './UpdateUser'

const User = ({ user }) => {
  return (
    <div className="container">
      <div className='user'>
        <span>{user.email} :: {user.username}</span>
        <div className="btns">
          <DeleteUser id={user._id} />
          <UpdateUser user={user} />
        </div>
      </div>

    </div>
  )
}

export default User