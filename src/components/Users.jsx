import { useSelector } from "react-redux"

export default function Users() {
  const user_state = useSelector((store) => store.users.users)
  console.log(user_state)
  return (
    <div className="w-[350px] flex flex-wrap">
      {user_state.map((user) => (
        <img
          src={user.photo}
          key={user._id}
          className="w-[150px] object-cover"
        />
      ))}
    </div>
  )
}
