import axios from '../../helpers/axiosConfig'
import {
  addUserData,
  getUserData,
  updateUserData,
  deleteUserData,
  setCurrentUser,
  setToken,
} from './actions'
import history from '../../helpers/history'

export const addUser = (payload) => {
  return dispatch => {
    axios.post('/user/addUser', payload)
      .then(res => {
        dispatch(addUserData(res.data.user))
        history.push('/login')
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data.msg)
        else console.log('Something went worng')
      })
  }
}

export const getUsers = () => {
  return dispatch => {
    axios.get('/user/getUsers')
      .then(res => {
        dispatch(getUserData(res.data))
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data.msg)
        else console.log('Something went worng')
      })
  }
}

export const updateUser = (payload, id) => {
  return dispatch => {
    axios.put(`/user/updateUser/${id}`, payload)
      .then(res => {
        dispatch(updateUserData(payload, id))
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data.msg)
        else console.log('Something went worng')
      })
  }
}

export const deleteUser = (id) => {
  return dispatch => {
    axios.delete(`/user/deleteUser/${id}`)
      .then(res => {
        dispatch(deleteUserData(id))
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data.msg)
        else console.log('Something went worng')
      })
  }
}

export const loginUser = (id) => {
  return dispatch => {
    axios.post(`/user/login`)
      .then(res => {
        dispatch(setCurrentUser(res.data.user))
        dispatch(setToken(res.data.token))
        sessionStorage.setItem('token', res.data.token)
        history.push('/view-student')
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data.msg)
        else console.log('Something went worng')
      })
  }
}