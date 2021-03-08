import React from 'react'
import * as layoutStyles from './layout.module.scss'

const Footer = () => {
  return (
    <footer>
      <p>Created by Lara with <span className={layoutStyles.heart}>&#10084;</span></p>
    </footer>
  )
}

export default Footer