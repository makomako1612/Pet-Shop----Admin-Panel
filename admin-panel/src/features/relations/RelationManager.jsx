import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { fetchRelations, addRelation, deleteRelation } from "./relationSlice"
import { fetchAnimals } from "../animals/animalsSlice"
import { fetchCategories } from "../categories/categoriesSlice"

const Container = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  margin-bottom: 15px;
`

const Select = styled.select`
  padding: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
`

const Button = styled.button`
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: #0077ff;

  &:hover {
    background-color: #005edc;
  }
`

const RelationManager = () => {
  const dispatch = useDispatch()
  const { animals } = useSelector((state) => state.animals)
  const { categories } = useSelector((state) => state.categories)
  const { relations } = useSelector((state) => state.relations)

  const [selectedAnimal, setSelectedAnimal] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    dispatch(fetchAnimals())
    dispatch(fetchCategories())
    dispatch(fetchRelations())
  }, [dispatch])

  const handleAddRelation = () => {
    if (!selectedAnimal || !selectedCategory) {
      alert("Please select both animal and category")
      return
    }

    // Check if relation already exists
    const exists = relations.find(
      (rel) =>
        rel.animal_id === Number(selectedAnimal) &&
        rel.category_id === Number(selectedCategory)
    )

    if (exists) {
      alert("This relation already exists")
      return
    }

    dispatch(
      addRelation({
        animal_id: Number(selectedAnimal),
        category_id: Number(selectedCategory)
      })
    )

    setSelectedAnimal("")
    setSelectedCategory("")
  }

  const handleDeleteRelation = (id) => {
    if (window.confirm("Are you sure you want to remove this relation?")) {
      dispatch(deleteRelation(id))
    }
  }

  return (
    <Container>
      <Title>Manage Animal-Category Relations</Title>

      <div>
        <Select
          value={selectedAnimal}
          onChange={(e) => setSelectedAnimal(e.target.value)}
        >
          <option value="">Select Animal</option>
          {animals.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </Select>

        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </Select>

        <Button onClick={handleAddRelation}>Add Relation</Button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Existing Relations</h3>
        {relations.length === 0 ? (
          <p>No relations found.</p>
        ) : (
          <ul>
            {relations.map((rel) => {
              const animal = animals.find((a) => a.id === rel.animal_id)
              const category = categories.find((c) => c.id === rel.category_id)
              return (
                <li key={rel.id} style={{ marginBottom: "5px" }}>
                  {animal?.name || "Unknown"} - {category?.title || "Unknown"}{" "}
                  <Button
                    style={{ backgroundColor: "#ff4d4d" }}
                    onClick={() => handleDeleteRelation(rel.id)}
                  >
                    Remove
                  </Button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Container>
  )
}

export default RelationManager
