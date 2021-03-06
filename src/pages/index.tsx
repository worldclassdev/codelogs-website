import { Hero, Episodes } from '../components/home'
import Image from '../components/utility/image'
import Layout from '../components/layout/Layout'
import { Link } from 'gatsby'
import React from 'react'
import SEO from '../components/utility/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Episodes />
  </Layout>
)

export default IndexPage
