import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'category',
  initialState: { type: 'category', parent_id: null },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload
    },
    setParentId: (state, action) => {
      state.parent_id = action.payload
    }
  }
})

export default categorySlice.reducer
export const { setType, setParentId } = categorySlice.actions
