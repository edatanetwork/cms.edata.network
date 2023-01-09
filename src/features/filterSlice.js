import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filters: null
  },
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload
    }
  }
})

export default filterSlice.reducer
export const { setFilter } = filterSlice.actions
