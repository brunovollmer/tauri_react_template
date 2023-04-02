import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface NameStoreState {
  name: string | undefined
  greeting: string | undefined
}

const initialState: NameStoreState = {
  name: undefined,
  greeting: undefined,
}

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setGreeting: (state, action: PayloadAction<string>) => {
      state.greeting = action.payload
    },
  },
})

export const { setName, setGreeting } = nameSlice.actions

export default nameSlice.reducer
