import { useState } from 'react'
import background from './assets/background.svg'

function App() {

  let currentDate = () => {
    const currentDate = new Date();


    const year = currentDate.getFullYear(); // Get the current year (e.g., 2024)
    const month = currentDate.getMonth() + 1; // Get the current month (0-indexed, so January is 0, February is 1, etc.)
    const day = currentDate.getDate(); // Get the day of the month (1-31)

    return `${day}/${month}/${year}`;
  }

  return (
  <>
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='relative h-[80%]'>
        <img src={background} alt="" className='h-full'/>
      
        <div className='h-[16.5%] w-full absolute top-0 flex justify-center items-center flex-col'>
          <div className='top-0 h-[60%] w-full flex justify-center items-center'>
            <h1 className='font-[Italiana] text-[2rem]'>ToDo List</h1>
          </div>
          <div className='h-[40%] w-full flex justify-between items-center'>
            <h1 className='pl-8 font-[Italiana] text-[1rem]'>Date: {currentDate()}</h1>
            <h1 className='pr-8 font-[Italiana] text-[1rem]'>ToDo List</h1>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
