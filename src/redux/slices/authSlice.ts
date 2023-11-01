import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  userName: string;
  uid: string;
  isGod: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    userName: "",
    uid: "",
    isGod: false,
  } as AuthState,
} as InitialState;

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          userName: action.payload,
          uid: action.payload,
          isGod: false,
        },
      };
    },
    toggleGodMode: (state) => {
        state.value.isGod = !state.value.isGod
    }
  },
});

export const { logIn, logOut, toggleGodMode } = auth.actions;
export default auth.reducer;