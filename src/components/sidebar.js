import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2.5rem;
  position: fixed;
  width: 20rem;
  /* Styling */
  background-color: #556b2f;
  color: white;
`
const Menu = styled.div`
  margin-bottom: auto;
  padding: 1rem 0;
  div {
    padding: 0.5rem 0;
  }
`
const MenuLink = styled(Link)`
  color: white;
  font-weight: ${props => (props.active ? 600 : 300)};
  text-decoration: none;

  &:visited {
    color: white;
    font-weight: 300;
    text-decoration: none;
  }
  &:active {
    color: #41571a;
  }
`
const Footer = styled.div`
  margin-top: auto;
`

const Media = styled.div`
  font-size: 1.5rem;
  a {
    color: white;
    padding: 0 0.2rem;
  }
  a:visited {
    color: white;
  }
  a:hover {
    text-decoration: none;
  }
`
const Rights = styled.div`
  color: #9ab173;
  font-size: 0.8rem;
`

class Sidebar extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <Wrapper>
        <h1 style={{ fontSize: "2.5rem" }}>{title}</h1>
        <h2
          style={{
            color: "#9AB173",
            fontSize: "1.7rem",
          }}
        >
          Monde Duinkharjav
        </h2>
        <Menu>
          <div>
            <MenuLink
              to="/blog/"
              active={location.pathname.includes("blog") ? 1 : 0}
            >
              Blog
            </MenuLink>
          </div>
          <div>
            <MenuLink
              to="/photos/"
              active={location.pathname.includes("photos") ? 1 : 0}
            >
              Photos
            </MenuLink>
          </div>
          <div>
            <MenuLink
              to="/about/"
              active={location.pathname.includes("projects") ? 1 : 0}
            >
              About
            </MenuLink>
          </div>
        </Menu>
        <Footer>
          <Media>
            <a
              href="https://github.com/budmonde"
              className="fa fa-github"
              aria-label="github"
            >
              {" "}
            </a>
            <a
              href="https://instagram.com/budmonde"
              className="fa fa-instagram"
              aria-label="instagram"
            >
              {" "}
            </a>
            <a
              href="https://fb.com/budmonde"
              className="fa fa-facebook"
              aria-label="facebook"
            >
              {" "}
            </a>
            <a
              href="https://www.linkedin.com/in/budmonde-duinkharjav-896a46127"
              className="fa fa-linkedin"
              aria-label="linkedin"
            >
              {" "}
            </a>
          </Media>
          <Rights>© {new Date().getFullYear()}, All Rights Reserved.</Rights>
        </Footer>
      </Wrapper>
    )
  }
}

export default Sidebar
