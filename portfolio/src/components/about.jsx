import React from 'react'

<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
     

const About = () => {
  return (
    <>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

      <div>
        <h1 className='mx-auto w-fit text-grape xl:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mb-6'>Aspiring Web Developer</h1>
        <p className='text-[1rem] md:text-[1.4rem] w-[65%] mx-auto text-center mb-10 '>
          I'm Harvey Burman, a web developer in training with a passion for creating purposeful projects and finding new ways to solve problems.
          I've been studying and practicing in my own time, building projects (which you can check out!) and earning certifications as I work toward my goal: turning what I love into a career.
        </p>
        <h1 className='mx-auto w-fit text-grape xl:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mb-10'>Skills</h1>

        <div className='flex mx-auto px-10 w-fit gap-x-6 gap-y-6 flex-wrap text-center mb-10 justify-center'>
          <figure>
            <i class="devicon-html5-plain colored text-[4.5rem] lg:text-[6.5rem]"></i>
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            <i class="devicon-css3-plain colored text-[4.5rem] lg:text-[6.5rem]"></i>
            <figcaption>CSS3</figcaption>
          </figure>
          <figure>
            <i class="devicon-tailwindcss-original colored text-[4.5rem] lg:text-[6.5rem]"></i>
            <figcaption>Tailwind CSS</figcaption>
          </figure>
          <figure>
            <i class="devicon-javascript-plain colored text-[4.5rem] lg:text-[6.5rem]"></i>
            <figcaption>Javascript</figcaption>
          </figure>
          <figure>
            <i class="devicon-react-original colored text-[4.5rem] lg:text-[6.5rem]"></i>
            <figcaption>React JS</figcaption>
          </figure>
          <figure>
            <i class="devicon-azure-plain colored text-[4.5rem] lg:text-[6.5rem]"></i>
            <figcaption>Azure</figcaption>
          </figure>
          <figure>
            <i class="devicon-amazonwebservices-plain-wordmark colored text-[4.5rem] lg:text-[6.5rem]"></i>
            <figcaption>AWS</figcaption>
          </figure>
        </div>
        <h1 className='mx-auto w-fit text-grape xl:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mb-6'>Hobbies</h1>
        <p className='text-[1rem] md:text-[1.4rem] w-[65%] mx-auto text-center mb-10 '>
          Since I was little I've loved playing video games and recently have been streaming them online to other people. I enjoy horror and retro games most but all genres are fun to me. I spend a decent portion of my free time (and money) expanding my music collection, and have a record spinning most of the time I'm not busy.
        </p>
      </div>
    </>
  )
}

export default About
