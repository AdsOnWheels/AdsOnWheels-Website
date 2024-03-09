import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Brand } from "@/types/types";

interface BrandList {
  brands: Brand[];
}

const initialState: BrandList = {
  brands: [],
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<Brand[]>) => {
      state.brands = action.payload;
    },
    addBrand: (state, action: PayloadAction<Brand>) => {
      state.brands.push(action.payload);
    },
    removeBrand: (state, action: PayloadAction<string>) => {
      state.brands = state.brands.filter(
        (brand) => brand.id !== action.payload
      );
    },
    updateBrandName: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.brands = state.brands.map((brand) => {
        if (brand.id === action.payload.id) {
          return { ...brand, name: action.payload.name };
        }
        return brand;
      });
    },
  },
});

export const { setBrands, addBrand, removeBrand, updateBrandName } =
  brandsSlice.actions;

export default brandsSlice.reducer;
