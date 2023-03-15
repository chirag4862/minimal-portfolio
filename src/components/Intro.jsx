import React from 'react'

export default function Intro() {
  return (
    <div className='flex items-center justify-center
    flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
            Chirag Vijay
        </h1>
        <p className='text-base md:text-xl mb-3 font-medium'>
            Software Engineer & Web Developer
        </p>
        <p className='text-sm max-w-xl mb-6 font-bold ml-10 mr-10'>
        Hi there! I'm Chirag, a frontend developer from Kolkata.
        I create immersive 3D worlds and design web and mobile apps that look
        as good as I do in my LinkedIn headshot.
        When I'm not coding, you can find me trying to make puns
        that are so bad they're actually good.
        Let's build something amazing together!
        </p>
    </div>
  )
}
