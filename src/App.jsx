import React from 'react'
import Canvas from './canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const App = () => {

  const [showcanvas, setShowcanvas] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cliclref = useRef(null);
  const growingref = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  useGSAP(()=>{
    cliclref.current.addEventListener("click", (e) => {
      setShowcanvas(!showcanvas);
      gsap.set(growingref.current, {
        top: e.clientY,
        left: e.clientX,
      });
      gsap.to(growingref.current, {
        scale : 1000,
        duration :1,
        
        ease : 'power2.inOut',
        onComplete: () => {
          gsap.set(growingref.current, {
            scale : 0,
            clearProps : 'all',
          })
        }
      })
    });
  },[showcanvas]);

  return (
    <>
      <span ref={growingref} className='growing block rounded-full fixed top-[-20px] left-[-20px] w-5 h-5'></span>
      <div className='w-full min-h-screen  relative ' >
        {showcanvas && 
        data[0].map((item, index) => (
            <Canvas canvasData={item}/>
        ))}

      <div className='w-full h-screen relative z-[1]'>
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
                  setIsDarkMode(!isDarkMode);
                  document.body.classList.toggle('dark');
                  document.body.style.backgroundColor = !isDarkMode ? '#fd2c2a' : '';
                }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                { !isDarkMode? (
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

                <p ref={cliclref} className='text-md  mt-10  ' >
                  click here or the text below to see the magic
                </p>
            </div>
        </div>

        <div className='w-full absolute bottom-0 left-0'>
        <h1 ref={cliclref} className={`text-9xl font-normal text-[16rem] tracking-tight pl-4 ${!isDarkMode ? 'text-white' : 'text-black'}`}>
          thirtysixstudio
        </h1>
      </div>
      </div>
      
      </div>  

    <div className='w-full h-screen relative text-white mt-32'>
        {showcanvas && 
          data[1].map((item, index) => (
            <Canvas canvasData={item}/>
        ))}
      <h1 className='text-8xl font-bold pl-10'>About the Brand</h1>
      <div className='flex justify-between items-center px-[10%] mt-10'>
        <p className='text-xl mt-10 text-center w-[50%] z-[1]'>
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
          We aim to revolutionize digital production in the advertising space, bringing your ideas to life.
          As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver seamless digital work.
          Our commitment to creativity, innovation, and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.
        </p>

        <img
            className="w-[30%] h-[500px] mt-10 object-cover rounded-lg" 
            src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
            alt=""
          />
      </div>
    </div>
    
    </>
    
    
  )
}

export default App
