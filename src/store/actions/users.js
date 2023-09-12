import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import apiUrl from "../../apiUrl"

const read_users = createAsyncThunk("read_users", async () => {
  try {
    let users = await axios(apiUrl + "users")
    console.log(users)
    return {
      users: users.data.response
    }
  } catch (err) {
    console.log(err)
    return {
      users: []
    }
  }
})

const signin = createAsyncThunk("signin", async (obj) => {
  try {
    let data = await axios.post(apiUrl + "auth/signin", obj.data)
    localStorage.setItem("token", data.data.response.token)
    return {
      user: data.data.response.user,
      token: data.data.response.token,
      messages: []
    }
  } catch (err) {
    console.log(err)
    return {
      user: {},
      token: "",
      messages: err.response.data.messages || [err.response.data.message]
    }
  }
})

const signin_token = createAsyncThunk("signin_token", async () => {
  try {
    let token = localStorage.getItem("token")
    let authorization = { headers: { Authorization: `Bearer ${token}` } }
    let data = await axios.post(apiUrl + "auth/token", null, authorization)
    localStorage.setItem("token", data.data.response.token)
    return {
      user: data.data.response.user,
      token: data.data.response.token
    }
  } catch (err) {
    console.log(err)
    return {
      user: {},
      token: ""
    }
  }
})

const signout = createAsyncThunk("signout", async () => {
  try {
    let token = localStorage.getItem("token")
    let authorization = { headers: { Authorization: `Bearer ${token}` } }
    await axios.post(apiUrl + "auth/signout", null, authorization)
    localStorage.removeItem("token")
    return {
      user: {},
      token: ""
    }
  } catch (err) {
    console.log(err)
    return {
      user: {},
      token: ""
    }
  }
})

const update_user = createAsyncThunk("update_user", async (obj) => {
  try {
    let token = localStorage.getItem("token")
    let authorization = { headers: { Authorization: `Bearer ${token}` } }
    let data = await axios.put(apiUrl + "users", obj.data, authorization)
    console.log(data)
    return {
      user: data.data.response
    }
  } catch (err) {
    console.log(err)
    return {
      user: {}
    }
  }
})

const signup = createAsyncThunk("signup", async (obj) => {
  try {
    let data = await axios.post(apiUrl + "auth/signup", obj.newUser)
    return {
      newUser: data.data.response
    }
  } catch (err) {
    return {
      newUser: {}
    }
  }
})

const users_actions = {
  read_users,
  signin,
  signin_token,
  signup,
  signout,
  update_user
}
export default users_actions
