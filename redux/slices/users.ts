import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/types";

interface UserList {
  users: User[];
}

const initialState: UserList = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUserName: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, name: action.payload.name };
        }
        return user;
      });
    },
  },
});

export const { setUsers, addUser, removeUser, updateUserName } =
  usersSlice.actions;

export default usersSlice.reducer;
