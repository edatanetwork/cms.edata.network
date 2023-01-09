import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).user
    : null,
  token: JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).token
    : null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          user,
          token
        })
      )
      state.user = user
      state.token = token
    },
    signout: state => {
      localStorage.removeItem('user')
      state.user = null
      state.token = null
    }
  }
})

export default authSlice.reducer
export const { setCredentials, signout } = authSlice.actions
export const selectCurrentUser = state => state.auth.user
