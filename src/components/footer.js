import React from 'react'
import * as footerStyles from './footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"


const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footer}>
        <FontAwesomeIcon icon={faGithub} size="2x" className={footerStyles.icon}/>
        <FontAwesomeIcon icon={faTwitter} size="2x" className={footerStyles.icon}/>
        <FontAwesomeIcon icon={faLinkedin} size="2x" className={footerStyles.icon}/>
        <FontAwesomeIcon icon={faEnvelope} size="2x" className={footerStyles.icon}/>
      </div>
    </footer>
  )
}

export default Footer