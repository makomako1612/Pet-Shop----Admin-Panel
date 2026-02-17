import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import AnimalsPage from "./features/animals/AnimalsPage"
import CategoriesPage from "./features/categories/CategoriesPage"
import RelationManager from "./features/relations/RelationManager"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default page when opening "/" */}
          <Route index element={<AnimalsPage />} />

          {/* Main routes */}
          <Route path="animals" element={<AnimalsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="relations" element={<RelationManager />} />

          {/* 404 fallback */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

