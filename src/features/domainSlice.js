import { createSlice } from '@reduxjs/toolkit'

const domainSlice = createSlice({
  name: 'domain',
  initialState: { domain_id: null },
  reducers: {
    setDomainId: (state, action) => {
      state.domain_id = action.payload
    }
  }
})

export default domainSlice.reducer
export const { setDomainId } = domainSlice.actions
