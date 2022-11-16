import { useEffect, useState } from "react"
import UserList from "./components/UsersList"

function UsersSection() {

  const [userData, setUserData] = useState([])

  useEffect(()=> {
  
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((user) => setUserData(user.results))
      
    }, [])

    console.log('user data', userData)

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userData={userData}/>
      </div>
    </section>
  )
}

export default UsersSection
