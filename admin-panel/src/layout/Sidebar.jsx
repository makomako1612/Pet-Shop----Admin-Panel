import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const SidebarContainer = styled.div`
  width: 220px;
  background-color: #1e1e2f;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 100vh;
`

const SidebarTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  display: block;
  background-color: ${({ active }) => (active ? "#33334d" : "transparent")};

  &:hover {
    background-color: #33334d;
  }
`

const Sidebar = () => {
  const location = useLocation()

  return (
    <SidebarContainer>
      <SidebarTitle>Admin Panel</SidebarTitle>

      <NavLink to="/animals" active={location.pathname === "/animals"}>
        Animals
      </NavLink>

      <NavLink to="/categories" active={location.pathname === "/categories"}>
        Categories
      </NavLink>

      <NavLink to="/relations" active={location.pathname === "/relations"}>
        Relations
      </NavLink>
    </SidebarContainer>
  )
}

export default Sidebar
