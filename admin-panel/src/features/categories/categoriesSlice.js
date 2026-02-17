import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../app/axios"

// GET
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  const response = await api.get("/categories")
  return response.data
})

// POST
export const addCategory = createAsyncThunk("categories/addCategory", async (category) => {
  const response = await api.post("/categories", category)
  return response.data
})

// PUT
export const updateCategory = createAsyncThunk("categories/updateCategory", async ({ id, updatedCategory }) => {
  const response = await api.put(`/categories/${id}`, updatedCategory)
  return response.data
})

// DELETE
export const deleteCategory = createAsyncThunk("categories/deleteCategory", async (id) => {
  await api.delete(`/categories/${id}`)
  return id
})

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { categories: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchCategories.pending, (state) => { state.loading = true })
      .addCase(fetchCategories.fulfilled, (state, action) => { state.loading = false; state.categories = action.payload })
      .addCase(fetchCategories.rejected, (state, action) => { state.loading = false; state.error = action.error.message })
      // ADD
      .addCase(addCategory.fulfilled, (state, action) => { state.categories.push(action.payload) })
      // UPDATE
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(c => c.id === action.payload.id)
        if (index !== -1) state.categories[index] = action.payload
      })
      // DELETE
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(c => c.id !== action.payload)
      })
  }
})

export default categoriesSlice.reducer

