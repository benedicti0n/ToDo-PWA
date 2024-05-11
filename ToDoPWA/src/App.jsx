import { useState } from 'react'
import background from './assets/background.svg'
import dayOfWeek from './components/WeeklyData/week';

function App() {
  const date = new Date();
  const currentDayIndex = date.getDay();

  console.log(currentDayIndex)

  const currentDate = () => {
    const year = date.getFullYear(); // Get the current year (e.g., 2024)
    const month = date.getMonth() + 1; // Get the current month (0-indexed, so January is 0, February is 1, etc.)
    const day = date.getDate(); // Get the day of the month (1-31)

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

          <div className='h-[40%] w-[85%] flex justify-between items-center'>

            <div className='h-[100%] w-[40%] flex items-center'>
              <h1 className=' font-[Italiana] text-[1rem]'>Date: {currentDate()}</h1>
            </div>

            <div className='h-[100%] w-[60%] flex justify-around items-center'>
              {dayOfWeek.map((day, index) => (
                <div key={day.id} className='font-[Italiana] text-[1rem] relative'>
                  <h1>{day.nameOfDay}</h1>
                  {index === currentDayIndex && <div className=" w-[3px] h-[3px] bg-black rounded-full absolute right-1/2"></div>}
                </div>
              )) }
              
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
  )
}

export default App
