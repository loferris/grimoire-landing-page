import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Wrapper = styled("div")`
`
const Li = styled("li")`
  display: inline-block;
  marginRight: 1rem;
  color: purple;
`
const ListLink = props => (
    <Li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </Li>
  )

export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        div {
          background: lavenderblush;
          color: purple;
          margin: 3rem auto;
          maxWidth: 650;
          padding: 0 1rem;
        }
      `}
    />
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>grimoire</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">home</ListLink>
        <ListLink to="/about/">about</ListLink>
        <ListLink to="/contact/">contact</ListLink>
      </ul>
    </header>
    {children}
  </Wrapper>
)
