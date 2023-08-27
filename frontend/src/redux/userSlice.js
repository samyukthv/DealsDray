import {createSlice} from "@reduxjs/toolkit" 

const initialState={
    username:"",
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
           
            state.username=action.payload.username
          
            
        },
        userLogout:(state,action)=>{
            
            state.username=""
            
        }
    }
})

export const { setUserDetails,userLogout } = userSlice.actions;
export default userSlice.reducer;