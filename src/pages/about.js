import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h2>About Me</h2>
        <p>I'm learning Gatsby + Contentful at the moment to build this portfolio + blog site and couldn't be more excited about the process.</p>
        <p>If you would like to send me an email or check my Github greens, 
        you can do that <Link to="/contact">here</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage