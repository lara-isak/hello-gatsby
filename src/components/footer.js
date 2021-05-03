import React from 'react'
import * as footerStyles from './footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"


const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footer}>
        <a href="https://github.com/lara-isak" target="_blank" rel="noreferrer" aria-label="Github Icon"><FontAwesomeIcon icon={faGithub} size="2x" className={footerStyles.icon}/></a>

        <a href="https://twitter.com/lara_isak" target="_blank" rel="noreferrer" aria-label="Twitter Icon"><FontAwesomeIcon icon={faTwitter} size="2x" className={footerStyles.icon}/></a>

        <a href="https://www.linkedin.com/in/lara-isak/" target="_blank" rel="noreferrer" aria-label="Linkedin Icon"><FontAwesomeIcon icon={faLinkedin} size="2x" className={footerStyles.icon}/></a>

        <a href="mailto:luckasti.larry@gmail.com" target="_blank" rel="noreferrer" aria-label="Email Icon"><FontAwesomeIcon icon={faEnvelope} size="2x" className={footerStyles.icon}/></a>
      </div>
    </footer>
  )
}

export default Footer