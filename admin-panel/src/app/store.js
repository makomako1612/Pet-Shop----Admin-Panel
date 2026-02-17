import { configureStore } from "@reduxjs/toolkit"
import animalsReducer from "../features/animals/animalsSlice"
import categoriesReducer from "../features/categories/categoriesSlice"
import relationReducer from "../features/relations/relationSlice"


export const store = configureStore({
  reducer: {
    animals: animalsReducer,
    categories: categoriesReducer,
    relations: relationReducer
  }
})
