import React from 'react'
import Footer from './components/footer'
import Header from './components/header'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>Email: <a href="mailto:luckasti.larry@gmail.com">luckasti.larry@gmail.com</a></p>
      <p>Github: <a href="https://github.com/shewhoridesapony" target="_blank">@shewhoridesapony</a></p>
      <Footer />
    </div>
  )
}

export default ContactPage