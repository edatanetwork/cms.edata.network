import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: { formData: {} },
  reducers: {
    setForm: (state, action) => {
      state.formData = action.payload
    },
    clearForm: state => {
      state.formData = null
    }
  }
})

export default formSlice.reducer
export const { setForm, clearForm } = formSlice.actions
