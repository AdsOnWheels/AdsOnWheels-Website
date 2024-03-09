import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Brand, Rider, User } from "@/types/types";

interface UserList {
  users: User[];
  riders: Rider[];
  brands: Brand[];
}

const initialState: UserList = {
  users: [],
  riders: [],
  brands: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setRiders: (state, action: PayloadAction<Rider[]>) => {
      state.riders = action.payload;
    },
    setBrands: (state, action: PayloadAction<Brand[]>) => {
      state.brands = action.payload;
    },
  },
});

export const { setUsers, setRiders, setBrands } = usersSlice.actions;

export default usersSlice.reducer;
