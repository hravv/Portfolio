import { useState } from 'react'
import './App.css'

function App() {

  const [page, setPage] = useState("Home");

  return (
  <div className='bg-floralwhite min-h-screen w-full'>
    <div className='head-container'>
      <h1 className='mx-auto w-fit font-futura'>
        {
        (page === "Home") ? "I'm Harvey."
                          : (page === "About") ? "About Me."
                          : (page === "Projects") ? "My Projects."
                          : "Contact Me" 
        }
      </h1>
    </div>
    <div className='selection'>
      <a onClick={() => setPage("Home")}>
        Home
      </a>
      <a onClick={() => setPage("About")}>
        About Me
      </a>
      <a onClick={() => setPage("Projects")}>
        Projects
      </a>
      <a onClick={() => setPage("Contact")}>
        Contact
      </a>
    </div>
  </div>
  )
}

export default App
