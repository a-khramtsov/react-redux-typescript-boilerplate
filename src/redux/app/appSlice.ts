import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loginCompleted: false
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoginCompleted: (state, action: PayloadAction<boolean>) => {
      state.loginCompleted = action.payload;
    },
  },
});

export const { setLoginCompleted } = appSlice.actions;





export default appSlice.reducer;
