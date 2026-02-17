import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../app/axios"

// GET
export const fetchAnimals = createAsyncThunk("animals/fetchAnimals", async () => {
  const response = await api.get("/animals")
  return response.data
})

// POST
export const addAnimal = createAsyncThunk("animals/addAnimal", async (animal) => {
  const response = await api.post("/animals", animal)
  return response.data
})

// PUT
export const updateAnimal = createAsyncThunk("animals/updateAnimal", async ({ id, updatedAnimal }) => {
  const response = await api.put(`/animals/${id}`, updatedAnimal)
  return response.data
})

// DELETE
export const deleteAnimal = createAsyncThunk("animals/deleteAnimal", async (id) => {
  await api.delete(`/animals/${id}`)
  return id
})

const animalsSlice = createSlice({
  name: "animals",
  initialState: { animals: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchAnimals.pending, (state) => { state.loading = true })
      .addCase(fetchAnimals.fulfilled, (state, action) => { state.loading = false; state.animals = action.payload })
      .addCase(fetchAnimals.rejected, (state, action) => { state.loading = false; state.error = action.error.message })
      // ADD
      .addCase(addAnimal.fulfilled, (state, action) => { state.animals.push(action.payload) })
      // UPDATE
      .addCase(updateAnimal.fulfilled, (state, action) => {
        const index = state.animals.findIndex(a => a.id === action.payload.id)
        if (index !== -1) state.animals[index] = action.payload
      })
      // DELETE
      .addCase(deleteAnimal.fulfilled, (state, action) => {
        state.animals = state.animals.filter(a => a.id !== action.payload)
      })
  }
})

export default animalsSlice.reducer
