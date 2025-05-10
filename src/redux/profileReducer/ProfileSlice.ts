import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserDetails {
  email: string;
  password: string;
}
const saveUserDetails = (userDetails: UserDetails) => {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
};
const removeUser = () => {
  localStorage.removeItem("userDetails");
};
const getUser = () => {
  const currentUser = localStorage.getItem("userDetails");
  return currentUser ? JSON.parse(currentUser) : { email: "", password: "" };
};
const initialState = getUser();
const ProfileSlice = createSlice({
  initialState: initialState,
  name: "profile",
  reducers: {
    saveUser: (state, action: PayloadAction<UserDetails>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      saveUserDetails(action.payload);
    },
    signOut: (state) => {
        state.email = "";
        state.password = "";
      removeUser();
    },
  },
});
export const { saveUser, signOut } = ProfileSlice.actions;
export default ProfileSlice.reducer;
