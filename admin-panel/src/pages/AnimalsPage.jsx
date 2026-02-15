import { useState } from "react"
import styled from "styled-components"
import AnimalForm from "./AnimalForm"
import AnimalsList from "./AnimalsList"

const PageWrapper = styled.div`
  padding: 30px;
  background-color: #f4f6f9;
  min-height: 100vh;
`

const PageTitle = styled.h1`
  margin-bottom: 25px;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`

const AnimalsPage = () => {
  const [editAnimal, setEditAnimal] = useState(null)

  return (
    <PageWrapper>
      <PageTitle>Animals Management</PageTitle>

      <ContentGrid>
        <AnimalForm
          editAnimal={editAnimal}
          setEditAnimal={setEditAnimal}
        />

        <AnimalsList
          setEditAnimal={setEditAnimal}
        />
      </ContentGrid>
    </PageWrapper>
  )
}

export default AnimalsPage
