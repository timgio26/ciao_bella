import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { clearSecurely, getSecurely } from '../utils/secureOp';

// Define a type for the slice state
interface userState {
  email: string|null;
}

// Define the initial state using that type
const initialState: userState = {
  email: getSecurely('user')
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signin:(state,action:PayloadAction<string>)=>{
      state.email = action.payload
      // saveSecurely('user',state.email)
    },
    signout:(state)=>{
      state.email = null
      clearSecurely("user")  
    }
  },
})

export const { signin, signout} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer