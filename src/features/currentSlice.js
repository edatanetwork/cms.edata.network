import { createSlice } from '@reduxjs/toolkit'

const currentSlice = createSlice({
  name: 'current',
  initialState: { current: null },
  reducers: {
    setCurrent: (state, action) => {
      clearCurrent()
      state.current = action.payload
    },
    clearCurrent: state => {
      state.current = null
    }
  }
})

export default currentSlice.reducer
export const { setCurrent, clearCurrent } = currentSlice.actions
