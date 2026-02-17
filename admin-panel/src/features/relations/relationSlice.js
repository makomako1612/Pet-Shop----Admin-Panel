import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../app/axios"

// GET all relations
export const fetchRelations = createAsyncThunk("relations/fetchRelations", async () => {
  const response = await api.get("/animals_with_categories")
  return response.data
})

// ADD relation
export const addRelation = createAsyncThunk("relations/addRelation", async (relation) => {
  const response = await api.post("/animals_with_categories", relation)
  return response.data
})

// DELETE relation
export const deleteRelation = createAsyncThunk("relations/deleteRelation", async (id) => {
  await api.delete(`/animals_with_categories/${id}`)
  return id
})

const relationSlice = createSlice({
  name: "relations",
  initialState: { relations: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchRelations.pending, (state) => { state.loading = true })
      .addCase(fetchRelations.fulfilled, (state, action) => { state.loading = false; state.relations = action.payload })
      .addCase(fetchRelations.rejected, (state, action) => { state.loading = false; state.error = action.error.message })
      // ADD
      .addCase(addRelation.fulfilled, (state, action) => { state.relations.push(action.payload) })
      // DELETE
      .addCase(deleteRelation.fulfilled, (state, action) => {
        state.relations = state.relations.filter(r => r.id !== action.payload)
      })
  }
})

export default relationSlice.reducer

