import { BrowserRouter, Routes, Route } from "react-router-dom"

// Layout
import Layout from "./layout/Layout"

// Pages
import AnimalsPage from "./pages/AnimalsPage"
import CategoriesPage from "./pages/CategoriesPage"
import RelationsPage from "./pages/RelationsPage" // RelationManager ან Pages ფოლდერში

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* მთავარი Layout (Sidebar + MainContent) */}
        <Route path="/" element={<Layout />}>

          {/* Admin Pages */}
          <Route path="animals" element={<AnimalsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="relations" element={<RelationsPage />} />

          {/* Default Route */}
          <Route path="*" element={<AnimalsPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
