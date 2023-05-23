import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false
}
export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload
    }
  }
})

export const loadingReducer = loadingSlice.reducer

export const { setLoading } = loadingSlice.actions