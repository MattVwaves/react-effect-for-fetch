function UserListItem ({user}) {
    return (
        <li class="bg-pink">
        <img
          src={user.picture.large}
          alt={user.name.first}
        />
          <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
          <p>{user.email}</p>
      </li>
    )
}

export default UserListItem