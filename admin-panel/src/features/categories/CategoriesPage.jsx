import { useState } from "react"
import styled from "styled-components"
import CategoriesForm from "./CategoriesForm"
import CategoriesList from "./CategoriesList"

const PageWrapper = styled.div`padding:30px; background-color:#f4f6f9; min-height:100vh;`
const PageTitle = styled.h1`margin-bottom:25px;`
const ContentGrid = styled.div`display:grid; grid-template-columns:1fr; gap:20px;`

const CategoriesPage = () => {
  const [editCategory, setEditCategory] = useState(null)
  return (
    <PageWrapper>
      <PageTitle>Categories Management</PageTitle>
      <ContentGrid>
        <CategoriesForm editCategory={editCategory} setEditCategory={setEditCategory}/>
        <CategoriesList setEditCategory={setEditCategory}/>
      </ContentGrid>
    </PageWrapper>
  )
}

export default CategoriesPage
