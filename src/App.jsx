import React from 'react'
import Canvas from './canvas'
import data from './data'

const App = () => {
  return (
    <div className='text-3xl font-bold underline text-center  w-full h-screen  relative'>
      {data[0].map((item, index) => (
          <Canvas canvasData={item}/>
      ))}
    </div>
  )
}

export default App
