import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filters: null,
    sportId: null,
    countryId: null,
    domainId: null
  },
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload
    },
    setSportId: (state, action) => {
      state.sportId = action.payload
    },
    setCountryId: (state, action) => {
      state.countryId = action.payload
    },
    setDomainId: (state, action) => {
      state.domainId = action.payload
    }
  }
})

export default filterSlice.reducer
export const { setFilter, setSportId, setCountryId, setDomainId } =
  filterSlice.actions
