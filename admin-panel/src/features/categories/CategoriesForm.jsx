import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addCategory, updateCategory } from "./categoriesSlice"

const FormContainer = styled.div`
  background: #fff; padding:20px; border-radius:8px; margin-bottom:20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`
const Title = styled.h2`margin-bottom:15px;`
const Input = styled.input`width:100%; padding:8px; margin-bottom:10px;`
const TextArea = styled.textarea`width:100%; padding:8px; margin-bottom:10px;`
const Button = styled.button`
  padding:10px 15px; background-color:#0077ff; color:white; border:none; cursor:pointer; border-radius:5px;
  &:hover { background-color:#005edc; }
`

const CategoriesForm = ({ editCategory, setEditCategory }) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ title:"", description:"" })

  useEffect(() => { if(editCategory) setFormData(editCategory) }, [editCategory])
  const handleChange = (e) => { const { name, value } = e.target; setFormData({...formData, [name]:value}) }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!formData.title) return alert("Please enter a title")
    if(editCategory) { dispatch(updateCategory({ id:editCategory.id, updatedCategory:formData })); setEditCategory(null) }
    else dispatch(addCategory(formData))
    setFormData({ title:"", description:"" })
  }

  return (
    <FormContainer>
      <Title>{editCategory ? "Edit Category" : "Add Category"}</Title>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="title" placeholder="Category Title" value={formData.title} onChange={handleChange}/>
        <TextArea name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
        <Button type="submit">{editCategory ? "Update" : "Create"}</Button>
      </form>
    </FormContainer>
  )
}

export default CategoriesForm
