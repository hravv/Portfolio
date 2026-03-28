import { React, useState, useEffect } from 'react'
import movietime from '../assets/movietime.png'
import pokeball from '../assets/pokeballicon.png'
import memorymatch from '../assets/memorymatch.png'
import Papa from 'papaparse';

const Projects = () => {

const [projectData, setProjectData] = useState([]);

const fetchProjectData = async () => {
    const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT2lWF1OztsOTZB3Rl7c00Oud7vDybWLiaA3qveN-RUKqts_qDhtqG69Le8RH_QO1vLP8cSQopQdK82/pub?output=csv")
    const text = await res.text();
    
    const parsed = Papa.parse(text, {
      header: true,
      skipEmptyLines: true
    })
    setProjectData(parsed.data);
}

useEffect (() => {
  fetchProjectData();
}, []);

useEffect(() => {
  console.log(projectData);
}, [projectData]);


  return (
    <div className='mb-10'>
      <h1 className='mx-auto w-fit text-grape xl:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mb-10'>Completed Projects</h1>
        {
          projectData.length ? 
            <div className='complete grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 mx-auto w-fit mb-8'>
              {
                projectData.map((item, index) => {
                  return (
                    <a href={item.PROJECTURL} target='_blank' key={index}>
                    <figure className='h-48 md:h-72 bg-grape w-42 md:w-62 rounded-2xl hover:scale-110 transition-all flex flex-col cursor-pointer'>
                      <img src={item.PROJECTIMG} className='h-32 md:h-50 w-32 md:w-50 mx-auto mt-6' />
                      <figcaption className='text-[1rem] md:text-[1.3rem] mx-auto my-auto text-white w-fit h-fit '>{item.PROJECT}</figcaption>
                    </figure>
                  </a>
                  )
                })
              }
            </div>

          :
          <div className='flex flex-col mx-auto justify-center text-center items-center w-fit my-10'>
            <img src={'/triangleicon.svg'} alt="" className='loadicon w-10 h-10' />
            <p>Loading...</p>
          </div>
        }

      <h1 className='mx-auto w-fit text-grape xl:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mb-10'>Projects I'm Working On</h1>
        {
          projectData.length ? 
          <div className='progress grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 mx-auto w-fit mb-8'>
            {
            projectData.map((item, index) => {
              return (
                  <a href={item.WORKINGURL} target='_blank' key={index} >
                    <figure className='h-48 md:h-72 bg-grape w-42 md:w-62 rounded-2xl hover:scale-110 transition-all flex flex-col cursor-pointer'>
                      {item.WORKINGIMG ?
                        <img src={item.WORKINGIMG} className='h-32 md:h-50 w-32 md:w-50 mx-auto mt-6' />
                      : 
                        <div className='h-32 md:h-50 w-32 md:w-50 mx-auto mt-6 bg-darkgrape'>
                        </div>}
                      <figcaption className='text-[1rem] md:text-[1.3rem] mx-auto my-auto text-white w-fit h-fit '>{item.WORKING}</figcaption>
                    </figure>
                  </a>
              )
            })
            }
          </div>

          : 
          
          <div className='flex flex-col mx-auto justify-center text-center items-center w-fit my-10'>
            <img src={'/triangleicon.svg'} alt="" className='loadicon w-10 h-10' />
            <p>Loading...</p>
          </div>
        }
    </div>
  )
}

export default Projects
