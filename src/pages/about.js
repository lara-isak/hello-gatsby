import React from 'react'
import { Link } from 'gatsby'
import Footer from './components/footer'
import Header from './components/header'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>Hi everyone! Nice to see you on my page.</p>
      <p>I'm currently participanting in the TechLabs Bootcamp, Web Dev track.</p>
      <p>I'm learning about Gatsby at the moment and couldn't be more excited to build some cool shit with it.</p>
      <p>If you would like to send me an email or check my Github greens, you can do that <Link to="/contact">here</Link></p>
      <Footer />
    </div>
  )
}

export default AboutPage