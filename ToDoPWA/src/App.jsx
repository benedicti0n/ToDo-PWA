import { useState } from 'react'
import background from './assets/background.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='relative h-[80%]'>
        <img src={background} alt="" className='h-full'/>
      
        <div className='h-[16.5%] w-full absolute top-0 flex justify-center items-center'>
          <h1 className=' font-[Sinosans]'>ToDo List</h1>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
