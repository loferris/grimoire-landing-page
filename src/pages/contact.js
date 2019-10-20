import React from "react"
import Header from "../components/header"
import Layout from '../components/layout'
import styled from '@emotion/styled'
//import { css } from '@emotion/core'

const A = styled.a`
  color: purple;
`

export default () => (
  <Layout>
    <Header headerText="Contact" />
    <p><A href="mailto:hi@grimoire.app">Send us a message!</A></p>
  </Layout>
)
