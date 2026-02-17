import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { fetchCategories, deleteCategory } from "./categoriesSlice"

const Container = styled.div`background:#fff; padding:20px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);`
const Title = styled.h2`margin-bottom:15px;`
const Table = styled.table`width:100%; border-collapse:collapse;`
const Th = styled.th`border-bottom:2px solid #ddd; padding:10px; text-align:left;`
const Td = styled.td`padding:10px; border-bottom:1px solid #eee;`
const Button = styled.button`padding:6px 10px; margin-right:5px; border:none; border-radius:4px; cursor:pointer; color:white;`
const EditButton = styled(Button)`background-color:#ffa500; &:hover{background-color:#e69500;}`
const DeleteButton = styled(Button)`background-color:#ff4d4d; &:hover{background-color:#cc0000;}`

const CategoriesList = ({ setEditCategory }) => {
  const dispatch = useDispatch()
  const { categories, loading, error } = useSelector(state => state.categories)

  useEffect(() => { dispatch(fetchCategories()) }, [dispatch])
  const handleDelete = (id) => { if(window.confirm("Are you sure?")) dispatch(deleteCategory(id)) }

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <Container>
      <Title>Categories List</Title>
      {categories.length===0 ? <p>No categories found.</p> :
      <Table>
        <thead><tr><Th>Title</Th><Th>Description</Th><Th>Actions</Th></tr></thead>
        <tbody>
          {categories.map(c => (
            <tr key={c.id}>
              <Td>{c.title}</Td>
              <Td>{c.description}</Td>
              <Td>
                <EditButton onClick={()=>setEditCategory(c)}>Edit</EditButton>
                <DeleteButton onClick={()=>handleDelete(c.id)}>Delete</DeleteButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>}
    </Container>
  )
}

export default CategoriesList

