import React from 'react'

const Hero = () => {
  return (
    <section className='mx-auto h-screen container flex items-center justify-center'>
        <div className='w-3/4 flex flex-col justify-between'>
            <h1 className='font-bold text-7xl'>Hi! I'm Honeylyn Jimenez -</h1>
            <h1 className='font-bold text-7xl text-yellow-400 mt-5'>Software Engineer</h1>

            <p className='text-gray-600 w-2/4 mt-5'>
                Software Engineer, Web and Mobile Application Developer for 7 years and currently a student at NAIT, CA.
                Specialized in Web Development.
            </p>

            <div className='grid grid-cols-2 w-2/4 mt-5'>
                <div>
                    <label className='font-bold text-lg'>E-mail:</label>
                    <p className='text-gray-600 mt-2.5'>honen.jimenez@gmail.com</p>
                </div>
                <div>
                    <label className='font-bold text-lg'>Github:</label>
                    <p className='text-gray-600 mt-2.5'>https://github.com/d3v-honey</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4 w-2/4 mt-5'>
                <button className='rounded bg-yellow-400 font-bold text-white py-2'>Download CV</button>
                <button className='rounded bg-neutral-900 font-bold text-white py-2'>Hire Me Now</button>
            </div>
        </div>
    </section>
  )
}

export default Hero