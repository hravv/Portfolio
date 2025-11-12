import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section className='footer relative z-10 h-[5rem] xl:h-[7.5rem] bg-grape mt-auto flex flex-col justify-center align-middle gap-x-10 md:gap-x-20'>
        <div className='socials-cont my-auto flex justify-center align-middle gap-x-10 md:gap-x-20 h-fit'>
        <a href='https://github.com/hravv' target='_blank'>
          <FontAwesomeIcon icon={faGithub} className='text-floralwhite text-[2rem] xl:text-[2.7rem] cursor-pointer hover:text-amber-100 hover:scale-120 transition' />
        </a>
        <a href='https://www.linkedin.com/in/harvey-burman-3b5704360/' target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} className='text-floralwhite text-[2rem] xl:text-[2.7rem] cursor-pointer hover:text-amber-100 hover:scale-120 transition' />
        </a>
        <a href='mailto:harveyoliverburman@outlook.com' target='_blank'>
          <FontAwesomeIcon icon={faEnvelope} className='text-floralwhite text-[2rem] xl:text-[2.7rem] cursor-pointer hover:text-amber-100 hover:scale-120 transition' />
        </a>
        <a href='http://instagram.com/hravv_/' target='_blank'>
          <FontAwesomeIcon icon={faInstagram} className='text-floralwhite text-[2rem] xl:text-[2.7rem] cursor-pointer hover:text-amber-100 hover:scale-120 transition' />
        </a>
        
        
        
        </div>
        <div className='foot-text mx-auto h-fit mb-1.5 xl:mb-3'>
            <p className='text-floralwhite lg:text-[0.8rem]'>&#169; Harvey Burman {new Date().getFullYear()}</p>
        </div>
    </section>
  )
}

export default Footer
