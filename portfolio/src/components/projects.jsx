import React from 'react'
import movietime from '../assets/movietime.png'
import pokeball from '../assets/pokeballicon.png'

const Projects = () => {
  return (
    <div className='mb-10'>
      <h1 className='mx-auto w-fit text-grape xl:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mb-10'>Completed Projects</h1>
      <div className='complete grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 mx-auto w-fit mb-8'>
        <a href="https://hravv.github.io/Movie-Time/" target='_blank'>
        <figure className='h-48 md:h-72 bg-grape w-42 md:w-62 rounded-2xl hover:scale-110 transition-all flex flex-col cursor-pointer'>
          <img src={movietime} className='h-32 md:h-50 w-32 md:w-50 mx-auto mt-6' />
          <figcaption className='text-[1rem] md:text-[1.3rem] mx-auto my-auto text-white w-fit h-fit '>Movie Time</figcaption>
        </figure>
        </a>

        <a href="https://hravv.github.io/PokeLister/" target='_blank'>
        <figure className='h-48 md:h-72 bg-grape w-42 md:w-62 rounded-2xl hover:scale-110 transition-all flex flex-col cursor-pointer'>
          <img src={pokeball} className='h-32 md:h-50 w-32 md:w-50 mx-auto mt-6' />
          <figcaption className='text-[1rem] md:text-[1.3rem] mx-auto my-auto text-white w-fit h-fit '>PokéLister</figcaption>
        </figure>
        </a>

        <figure className='h-48 md:h-72 bg-grape w-42 md:w-62 rounded-2xl hover:scale-110 transition-all flex flex-col'>
          <div className='bg-darkgrape h-32 md:h-50 w-32 md:w-50 mx-auto mt-6' />
          <figcaption className='text-[1rem] md:text-[1.3rem] mx-auto my-auto w-fit h-fit '></figcaption>
        </figure>

      </div>

      <h1 className='mx-auto w-fit text-grape xl:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mb-10'>Projects I'm Working On</h1>

      <div className='progress grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 mx-auto w-fit mb-8'>
        <figure className='h-48 md:h-72 bg-grape w-42 md:w-62 rounded-2xl hover:scale-110 transition-all flex flex-col'>
          <div className='bg-darkgrape h-32 md:h-50 w-32 md:w-50 mx-auto mt-6' />
          <figcaption className='text-[1rem] md:text-[1.3rem] mx-auto my-auto w-fit h-fit '></figcaption>
        </figure>

        <figure className='h-48 md:h-72 bg-grape w-42 md:w-62 rounded-2xl hover:scale-110 transition-all flex flex-col'>
          <div className='bg-darkgrape h-32 md:h-50 w-32 md:w-50 mx-auto mt-6' />
          <figcaption className='text-[1rem] md:text-[1.3rem] mx-auto my-auto w-fit h-fit '></figcaption>
        </figure>

        <figure className='h-48 md:h-72 bg-grape w-42 md:w-62 rounded-2xl hover:scale-110 transition-all flex flex-col'>
          <div className='bg-darkgrape h-32 md:h-50 w-32 md:w-50 mx-auto mt-6' />
          <figcaption className='text-[1rem] md:text-[1.3rem] mx-auto my-auto w-fit h-fit '></figcaption>
        </figure>

      </div>
    </div>
  )
}

export default Projects
