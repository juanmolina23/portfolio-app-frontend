import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  username: string;
  firstName: string;
  lastName: string;
  displayName: string;
  role: string;
}

interface UserState {
  user: User;
}

const initState: UserState = {
  user: {
    username: "",
    firstName: "",
    lastName: "",
    displayName: "",
    role: "",
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    addAuthUser: (state, action: PayloadAction<User>) => {
      state.user.username = action.payload.username;
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.displayName = action.payload.displayName;
      state.user.role = action.payload.role;
    },
    removeAuthUser: (state) => {
      state.user.username = "";
      state.user.firstName = "";
      state.user.lastName = "";
      state.user.displayName = "";
      state.user.role = "";
    },
  },
});

export default UserSlice.reducer;
export const { addAuthUser, removeAuthUser } = UserSlice.actions;
