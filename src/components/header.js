import React from 'react'
import { Link } from 'gatsby'
import * as headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1><Link className={headerStyles.title} to="/">Lara Isak</Link></h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
        </ul>
      </nav>   
    </header>
  )
}

export default Header