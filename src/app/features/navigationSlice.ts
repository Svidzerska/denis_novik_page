//reducer
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   selectSection: "0",   
}


export const navigationSlice = createSlice({
   name: 'section',
   initialState,
   reducers: {
      setSection: (state, action) => {
         console.log(action);
         state.selectSection = action.payload
      },
   },
})

export const {setSection} = navigationSlice.actions;
export default navigationSlice.reducer;