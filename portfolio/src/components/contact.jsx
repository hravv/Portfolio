import React from 'react'

const Contact = () => {
    return (
        <>
        <h1 className='mx-auto w-fit text-grape xl:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mb-6'>Want to get in touch?</h1>
        <p className='text-[1.1rem] md:text-[1.4rem] w-[65%] mx-auto text-center mb-10 '>
          Fill in the form below if you want to talk opportunities, coding, or anything at all! 
        </p>
        <div className="form-cont w-fit mx-auto px-8 py-10 mb-10 bg-amber-100/40 rounded-2xl">
            <form action="https://formspree.io/f/xldoqbav" method="POST" className="flex flex-col">
            <label className="flex mb-10">
                Your email:
                <input type="email" name="email" className='bg-white w-88 ml-8' />
            </label>
            <label className='flex'>
                Your message:
                <textarea name="message" className='bg-white ml-8 w-88 h-48 mb-10'></textarea>
            </label>
            <button type="submit" className='mb-2 text-floralwhite bg-grape cursor-pointer w-fit mx-auto px-3 py-2 rounded-xl'>Send</button>
            </form>
        </div>
    </>
    )
}

export default Contact