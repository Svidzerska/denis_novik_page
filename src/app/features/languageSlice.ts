//reducer
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   selectLanguage: "Eng",   
}


export const languageSlice = createSlice({
   name: 'language',
   initialState,
   reducers: {
      setLanguage: (state, action) => {
         console.log(action);
         state.selectLanguage = action.payload
      },
   },
})

export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;