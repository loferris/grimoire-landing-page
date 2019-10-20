import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p><a href="mailto:hi@grimoire.app">Send us a message!</a></p>
  </Layout>
)
