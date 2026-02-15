import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addAnimal, updateAnimal } from "./animalsSlice"

const FormContainer = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  margin-bottom: 15px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`

const Button = styled.button`
  padding: 10px 15px;
  background-color: #0077ff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #005edc;
  }
`

const AnimalForm = ({ editAnimal, setEditAnimal }) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: "",
    priceUSD: "",
    priceGEL: "",
    description: "",
    isPopular: false,
    stock: ""
  })

  useEffect(() => {
    if (editAnimal) {
      setFormData(editAnimal)
    }
  }, [editAnimal])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.priceUSD || !formData.stock) {
      alert("Please fill required fields")
      return
    }

    const preparedData = {
      ...formData,
      priceUSD: Number(formData.priceUSD),
      priceGEL: Number(formData.priceGEL),
      stock: Number(formData.stock)
    }

    if (editAnimal) {
      dispatch(updateAnimal({ id: editAnimal.id, updatedAnimal: preparedData }))
      setEditAnimal(null)
    } else {
      dispatch(addAnimal(preparedData))
    }

    setFormData({
      name: "",
      priceUSD: "",
      priceGEL: "",
      description: "",
      isPopular: false,
      stock: ""
    })
  }

  return (
    <FormContainer>
      <Title>{editAnimal ? "Edit Animal" : "Add Animal"}</Title>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Animal Name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          type="number"
          name="priceUSD"
          placeholder="Price USD"
          value={formData.priceUSD}
          onChange={handleChange}
        />

        <Input
          type="number"
          name="priceGEL"
          placeholder="Price GEL"
          value={formData.priceGEL}
          onChange={handleChange}
        />

        <Input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />

        <TextArea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <CheckboxWrapper>
          <input
            type="checkbox"
            name="isPopular"
            checked={formData.isPopular}
            onChange={handleChange}
          />
          <label>Popular</label>
        </CheckboxWrapper>

        <Button type="submit">
          {editAnimal ? "Update" : "Create"}
        </Button>
      </form>
    </FormContainer>
  )
}

export default AnimalForm
