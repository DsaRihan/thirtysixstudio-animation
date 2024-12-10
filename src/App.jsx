import React from 'react'
import Canvas from './canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className='w-full min-h-screen  relative'>
        {/* {data[0].map((item, index) => (
            <Canvas canvasData={item}/>
        ))} */}

      <div className='w-full h-screen relative'>
        <nav className=" w-full p-4 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Animation</h1>
            <div className="flex items-center gap-8">
              <ul className="flex gap-8">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => {
                  document.body.classList.toggle('dark');
                  document.body.style.backgroundColor = document.body.classList.contains('dark') ? 'black' : '';
                }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                {!document.body.classList.contains('dark') ? (
                  <svg xmlns="http://www.w3.org/2000/svg" key="sun" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" key="moon" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        <div className='divcontainer w-full px-[20%]  text-white'>
            <div className='text w-[50%]'>
                <h3 className='text-4xl leading-[1.0]'>
                  At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
                </h3>

                <p className='text-lg w-[80%] mt-10 font-md '>
                  We’re a boutique production studio focused on design, motion,
                  and creative technology, constantly reimagining what digital craft
                  can do for present-time ads and campaigns.
                </p>

                <p className='text-md  mt-10  '>
                  Scroll
                </p>
            </div>
        </div>

        <div className='w-full absolute bottom-0 left-0'>
          <h1 className='text-9xl font-normal text-[16rem] tracking-tight pl-4'>
            thirtysixstudio
          </h1>
        </div>
      </div>
      
    </div>
    
    </>
    
    
  )
}

export default App
