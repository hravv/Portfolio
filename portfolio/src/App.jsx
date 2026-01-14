import { useState } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion';

import Home from './components/home.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Footer from './components/footer.jsx'
import Contact from './components/contact.jsx'

function App() {

  const [page, setPage] = useState("Home");

  return (
  <>
    <div className='background bg-floralwhite z-0 mix-blend-darken'> {/* Shapes Background Div */}
      <span className='shape ball mix-blend-darken' />
      <span className='shape ball mix-blend-darken' />
      <span className='shape square mix-blend-darken' />
      <span className='shape square mix-blend-darken' />
      <span className='triangle mix-blend-darken' />
      <span className='triangle mix-blend-darken' />
    </div>
    <div className='relative z-10 min-h-screen w-full flex flex-col'>
      <div className='h-20 lg:h-25 xl:h-40'></div>
      {/* Top Space */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration: 0.17}}
        >
          <div className='head-container mix-blend-darken'>
            <h1 className='mx-auto mix-blend-darken* w-fit font-futura xl:text-[6rem] sm:text-[4.8rem] text-[3.5rem] text-grape transition ease-in-out'>
              {
              (page === "Home") ? "I'm Harvey."
                                : (page === "About") ? "About Me."
                                : (page === "Projects") ? "My Projects."
                                : "Contact Me." 
              }
            </h1>
          </div>
          <nav className='selection mx-auto w-fit flex gap-x-5.5 xl:gap-x-10 xl:text-[1.6rem] sm:text-[1.3rem] text-[1rem]'>
            <a className='cursor-pointer text-grape' onClick={() => setPage("Home")}>
              Home
            </a>
            <a className='cursor-pointer text-grape' onClick={() => setPage("About")}>
              About Me
            </a>
            <a className='cursor-pointer text-grape' onClick={() => setPage("Projects")}>
              Projects
            </a>
            <a className='cursor-pointer text-grape' onClick={() => setPage("Contact")}>
              Contact
            </a>
          </nav>
          <div className='h-[3rem] lg:h-[4rem]' />
          {/*Gap below nav*/}
          <section>
              {
              (page === "Home") ? <Home />
                                : (page === "About") ? <About />
                                : (page === "Projects") ? <Projects />
                                : (page === "Contact") ? <Contact />
                                : "" 
              }
          </section>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  </>
  )
}

export default App
