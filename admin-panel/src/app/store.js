import { configureStore } from "@reduxjs/toolkit"
import animalsReducer from "../features/animals/animalsSlice"
import categoriesReducer from "../features/categories/categoriesSlice"
import relationReducer from "../features/relations/relationSlice"


reducer: {
  animals: animalsReducer
}

reducer: {
  categories: categoriesReducer
}

export const store = configureStore({
  reducer: {
    animals: animalsReducer,
    categories: categoriesReducer,
    relations: relationReducer
  }
})
