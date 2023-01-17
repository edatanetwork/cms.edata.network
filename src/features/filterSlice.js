import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filters: null, sportId: null, countryId: null },
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload
    },
    setSportId: (state, action) => {
      state.sportId = action.payload
    },
    setCountryId: (state, action) => {
      state.countryId = action.payload
    }
  }
})

export default filterSlice.reducer
export const { setFilter, setSportId, setCountryId } = filterSlice.actions
