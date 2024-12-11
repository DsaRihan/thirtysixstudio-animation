import React, { useEffect, useRef, useState } from 'react'
import image from './image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Canvas = ({canvasData}) => {
    const {startIndex, numImages, duration, size, top, left, zIndex} = canvasData;
    const [index, setindex] = useState({value : startIndex});
    const canvasRef = useRef(null);

    useGSAP(() => {
        gsap.to(index,
            {value : startIndex + numImages-1,
                duration : duration,
                ease : 'linear',repeat : -1,
                onUpdate:()=>
                    {setindex({value : Math.round(index.value)})}})

        gsap.from(canvasRef.current,
            {scale : 1.2,
                opacity : 0,
                duration : 0.5,
                ease : 'linear',
            })
    })

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');        
        const img = new Image();
        img.src = image[index.value];
        
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    },[index])

  return (
    <canvas ref={canvasRef}
        data-scroll
        data-scroll-speed={Math.random().toFixed(1)}
        id='canvas'
        className='absolute'
        style={{width : `${size*1.2}px`, height : `${size*1.2}px`, top : `${top}%`, left : `${left}%`, zIndex : `${zIndex}`}}>  
        </canvas>
  )
}

export default Canvas
