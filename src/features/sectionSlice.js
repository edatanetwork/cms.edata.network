import { createSlice } from '@reduxjs/toolkit'

const sectionSlice = createSlice({
  name: 'section',
  initialState: { section: 'resources' },
  reducers: {
    setSection: (state, action) => {
      state.section = action.payload
    }
  }
})

export default sectionSlice.reducer
export const { setSection } = sectionSlice.actions
