import React from "react"
import styled from "styled-components"

import Sidebar from "./sidebar"

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20rem;
  padding: 0.2rem;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <Wrapper>
        <Sidebar location={location} title={title} />
        <Content>{children}</Content>
      </Wrapper>
    )
  }
}

export default Layout
