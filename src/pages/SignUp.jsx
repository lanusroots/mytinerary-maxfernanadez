import FormSignUp from "../components/FormSignUp"
import backgroundImage from "/img/backgroundSign.jpg"

// import { useDispatch } from 'react-redux';
// import users_actions from '../store/actions/users';
// import { useEffect, useState } from 'react';
// import Users from '../components/Users';
// const { read_users }  = users_actions;

export default function SignUp() {
  // const [reload, setReload] = useState(false)
  // const dispatch = useDispatch()
  // useEffect(
  //   () => { dispatch(read_users())},
  //   [reload]
  // )

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center h-full mt-[20px] xl:pt-20">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <FormSignUp />
        </div>
      </div>
    </div>
  )
}
