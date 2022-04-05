//reducer
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
   selectSection : string
}

const initialState : InitialState = {
   selectSection: "0",   
}

interface Action {
   payload : string,
   type : string
}


export const navigationSlice = createSlice({
   name: 'section',
   initialState,
   reducers: {
      setSection: (state, action : Action) => {
         console.log(action);
         state.selectSection = action.payload
      },
   },
})

export const {setSection} = navigationSlice.actions;
export default navigationSlice.reducer;