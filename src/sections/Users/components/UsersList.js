import UserListItem from "./UsersListItem"

function UserList ({userData}){
    return (
        <ul class="users-list">
        {
          userData.map((user)=>
          <UserListItem user={user} />
          )
        }
      </ul>
    )
}

export default UserList