import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import AnimalsPage from "./features/animals/AnimalsPage"
import CategoriesPage from "./features/categories/CategoriesPage"
import RelationManager from "./features/relations/RelationManager"

import GlobalStyles from "./GlobalStyles"
import Router from "./Router"

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  )
}




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="animals" element={<AnimalsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="relations" element={<RelationManager />} />
          {/* Default route */}
          <Route path="*" element={<AnimalsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

