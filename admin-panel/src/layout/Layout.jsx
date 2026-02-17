import { Outlet, Link } from "react-router-dom"
import styled from "styled-components"

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f6f9;
`

const Sidebar = styled.div`
  width: 220px;
  background-color: #1e1e2f;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
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

  &:hover {
    background-color: #33334d;
  }
`

const MainContent = styled.div`
  flex: 1;
  padding: 30px;
`

const Layout = () => {
  return (
    <LayoutWrapper>
      <Sidebar>
        <SidebarTitle>Admin Panel</SidebarTitle>
        <NavLink to="/animals">Animals</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/relations">Relations</NavLink>
      </Sidebar>

      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  )
}

export default Layout

