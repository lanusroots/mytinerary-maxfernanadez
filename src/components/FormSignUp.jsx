import axios from "axios"
import { useRef, useEffect } from "react"
import apiUrl from "../apiUrl"
import { Link as Anchor } from "react-router-dom"
import { useDispatch } from "react-redux"
import user_actions from "../store/actions/users"
import Swal from "sweetalert2"

const { signup } = user_actions

export default function FormSignUp() {
  let countries = [
    "Argentina",
    "Uruguay",
    "Brasil",
    "Bolivia",
    "Venezuela",
    "Paraguay",
    "EEUU",
    "Chile",
  ];
  const name = useRef("")
  const lastName = useRef("")
  const country = useRef("")
  const photo = useRef("")
  const mail = useRef("")
  const password = useRef("")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(signup())
  }, [])

  async function handleSignUp() {
    try {
      if (
        !name.current.value ||
        !lastName.current.value ||
        !country.current.value ||
        !photo.current.value ||
        !mail.current.value ||
        !password.current.value
      ) {
        const errorMessages = []
        if (!name.current.value) {
          errorMessages.push("First Name is required")
        }
        if (!lastName.current.value) {
          errorMessages.push("Last Name is required")
        }
        if (!country.current.value) {
          errorMessages.push("Country is required")
        }
        if (!photo.current.value) {
          errorMessages.push("Photo is required")
        }
        if (!mail.current.value) {
          errorMessages.push("Mail is required")
        }
        if (!password.current.value) {
          errorMessages.push("Password is required")
        }
        Swal.fire({
          icon: "error",
          title: "Registration Error",
          html: errorMessages.map((message) => `<p>${message}</p>`).join(""),
        });
        return
      }

      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };

      await axios.post(apiUrl + "auth/signup", data)
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have successfully registered.",
      })

      name.current.value = ""
      lastName.current.value = ""
      country.current.value = ""
      photo.current.value = ""
      mail.current.value = ""
      password.current.value = ""
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Registration Error",
        text: "An error occurred during registration. Please try again later.",
      })
      console.log(err)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md w-[400px]">
        <input
          ref={name}
          type="text"
          name="name"
          id="name"
          defaultValue=""
          placeholder="First Name"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={lastName}
          type="text"
          name="lastName"
          id="lastName"
          defaultValue=""
          placeholder="Last Name"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <select
          ref={country}
          type="text"
          name="country"
          id="country"
          defaultValue=""
          placeholder="Country"
          className="mb-4 px-3 py-2 border rounded w-full"
        >
          <option value="Country" hidden>
            Country
          </option>
          {countries.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </select>

        <input
          ref={photo}
          type="text"
          name="photo"
          id="photo"
          defaultValue=""
          placeholder="Photo"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={mail}
          type="text"
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Mail"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          defaultValue=""
          placeholder="Password"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <button
          type="button"
          onClick={handleSignUp}
          className="bg-primary text-white px-3 py-2 rounded w-full"
        >
          Sign Up!
        </button>
        <p className="mt-4">Already have an account?</p>
        <Anchor to="/auth/signIn" className="text-primary">
          <p>Sign in</p>
        </Anchor>
        <button className="flex justify-center items-center mt-8 hover:bg-slate-200 rounded w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            className="border-2 inline rounded-full"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <p className="text-xs">Sign Up with Google</p>
        </button>
      </form>
    </div>
  )
}
