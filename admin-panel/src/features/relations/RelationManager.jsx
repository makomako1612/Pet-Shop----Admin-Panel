import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { fetchRelations, addRelation, deleteRelation } from "./relationSlice"
import { fetchAnimals } from "../animals/animalsSlice"
import { fetchCategories } from "../categories/categoriesSlice"

const Container = styled.div`background:#fff; padding:20px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);`
const Title = styled.h2`margin-bottom:15px;`
const Select = styled.select`padding:8px; margin-right:10px;`
const Button = styled.button`padding:6px 12px; background:#0077ff; color:white; border:none; border-radius:5px; cursor:pointer; &:hover{background:#005edc;}`
const Table = styled.table`width:100%; border-collapse:collapse; margin-top:20px;`
const Th = styled.th`border-bottom:2px solid #ddd; padding:10px; text-align:left;`
const Td = styled.td`padding:10px; border-bottom:1px solid #eee;`
const DeleteButton = styled(Button)`background:#ff4d4d; &:hover{background:#cc0000;}`

const RelationManager = () => {
  const dispatch = useDispatch()
  const { animals } = useSelector(state => state.animals)
  const { categories } = useSelector(state => state.categories)
  const { relations, loading, error } = useSelector(state => state.relations)

  const [selectedAnimal, setSelectedAnimal] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    dispatch(fetchAnimals())
    dispatch(fetchCategories())
    dispatch(fetchRelations())
  }, [dispatch])

  const handleAddRelation = () => {
    if (!selectedAnimal || !selectedCategory) return alert("Select animal and category")
    const exists = relations.find(r => r.animal_id === Number(selectedAnimal) && r.category_id === Number(selectedCategory))
    if (exists) return alert("This relation already exists")
    dispatch(addRelation({ animal_id: Number(selectedAnimal), category_id: Number(selectedCategory) }))
  }

  const handleDeleteRelation = (id) => { dispatch(deleteRelation(id)) }

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <Container>
      <Title>Manage Animal-Category Relations</Title>
      <div>
        <Select value={selectedAnimal} onChange={e=>setSelectedAnimal(e.target.value)}>
          <option value="">Select Animal</option>
          {animals.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
        </Select>
        <Select value={selectedCategory} onChange={e=>setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
        </Select>
        <Button onClick={handleAddRelation}>Add Relation</Button>
      </div>

      <Table>
        <thead>
          <tr><Th>Animal</Th><Th>Category</Th><Th>Action</Th></tr>
        </thead>
        <tbody>
          {relations.map(r => {
            const animal = animals.find(a=>a.id===r.animal_id)
            const category = categories.find(c=>c.id===r.category_id)
            return (
              <tr key={r.id}>
                <Td>{animal ? animal.name : "N/A"}</Td>
                <Td>{category ? category.title : "N/A"}</Td>
                <Td><DeleteButton onClick={()=>handleDeleteRelation(r.id)}>Remove</DeleteButton></Td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default RelationManager

