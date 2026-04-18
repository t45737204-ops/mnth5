import style from './UserList.module.css'
import UserCard from '../components/UserCard'

const UserList = () => {
    const users = [
    {name: "Turan",
      age: 15,
      city: "Bishkek",
      active: true,
      img: "https://www.vecteezy.com/free-vector/user-icon"
     
    },
    {name: "Azimbek",
        age:"14",
        city:"Bishkek",
        active:"true",
        img:"https://www.vecteezy.com/free-vector/user-icon"
        
    },
    {name:"Ariet",
        age:"15",
        city:"Bishkek",
        active:"true",
        img:"https://www.vecteezy.com/free-vector/user-icon"

    },
    
  ]
  return (
    <div className={style.wrapper}>
        {users.map(user=>(
            <UserCard user={user}/>
        ))}
    </div>
  )
}

export default UserList
