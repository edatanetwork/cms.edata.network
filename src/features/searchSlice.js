import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: { searchTerm: '' },
  reducers: {
    setSearch: (state, action) => {
      state.searchTerm = action.payload
    },
    clearSearch: state => {
      state.searchTerm = ''
    }
  }
})

export default searchSlice.reducer
export const { setSearch, clearSearch } = searchSlice.actions
