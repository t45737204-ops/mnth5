import React from 'react'
import style from './UserCard.module.css'

const UserCard = ({ user }) => {
 // console.log("UserCard render: ", user.name)

  return (
    <div className={style.card}>
      <img src={user.img} alt={user.name} />
      <h3>{user.name}</h3>
      <p>возрост: {user.age}</p>
      <p>Город: {user.city}</p>

      {user.active ? (
        <span className={style.active}>Активный</span>
      ) :  (
        <span className={style.inactive}>Неактивный</span>
      )}
    </div>
  )
}
export default UserCard