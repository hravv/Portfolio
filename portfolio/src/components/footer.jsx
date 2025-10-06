import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section className='footer h-[7.5rem] bg-grape mt-auto flex flex-col justify-center align-middle gap-x-10 md:gap-x-20'>
        <div className='socials-cont my-auto flex justify-center align-middle gap-x-10 md:gap-x-20 h-fit'>
        <FontAwesomeIcon icon={faGithub} className='text-floralwhite text-[2.7rem]' />
        <FontAwesomeIcon icon={faLinkedin} className='text-floralwhite text-[2.7rem]' />
        <FontAwesomeIcon icon={faEnvelope} className='text-floralwhite text-[2.7rem]' />
        <FontAwesomeIcon icon={faInstagram} className='text-floralwhite text-[2.7rem]' />
        </div>
        <div className='foot-text mx-auto h-fit mb-3'>
            <p className='text-floralwhite'>&#169; Harvey Burman {new Date().getFullYear()}</p>
        </div>
    </section>
  )
}

export default Footer
