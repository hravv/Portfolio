import React from 'react'

const Projects = () => {
  return (
    <div>

      <div className='complete grid grid-cols-3 gap-14 mx-auto w-fit mb-8'>
        <figure className='h-72 bg-grape w-62'>
          <div className='bg-darkgrape h-50 w-50 mx-auto mt-6' />
        </figure>
        <figure>
          <div className='bg-darkgrape h-50 w-50' />
        </figure>
        <figure>
          <div className='bg-indigo-400 h-50 w-50' />
        </figure>
      </div>
      <div className='progress grid grid-cols-3 gap-14 mx-auto w-fit mb-8'>
        <figure>
          <div className='bg-indigo-400 h-50 w-50' />
        </figure>
        <figure>
          <div className='bg-indigo-400 h-50 w-50' />
        </figure>
        <figure>
          <div className='bg-indigo-400 h-50 w-50' />
        </figure>
      </div>
    </div>
  )
}

export default Projects
