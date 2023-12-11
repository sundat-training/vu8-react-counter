'use client'
import { log } from 'console'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [d1, setd1] = useState(1)
  const [d2, setd2] = useState(10)
  const [tss, settss] = useState([1,2,2,3,4,5,6,7])
  

  const dec = () =>{
    setCount( count - d1)
  }
  const ddec = () =>{
    setCount( count - d2)
  }

  const inc = () =>{
    setCount( count + d1)
  }
  const iinc = () =>{
    setCount( count + d2)
  }
  const reset = () =>{
    setCount(0)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Counter App</h1> 

     <h3>countata is:   
      <span> {count}</span>
       </h3>
    <div className='flex flex-row space-x-3'>

     <button className='w-4' onClick={ddec}>--</button>
     <button className='w-4' onClick={dec}>-</button>
     <button className='w-12' onClick={reset}>reset</button>
     <button className='w-4' onClick={inc}>+</button>
     <button className='w-4' onClick={iinc}>++</button>
    </div>
    
    <div className='flex flex-col space-y-2'>
      <input type="number" value={d1}  onChange={e => setd1(parseInt(e.target.value)) } />
      <input type="number" value={d2}  onChange={e => setd2(parseInt(e.target.value)) }/>
    </div>

    <ul className='mt-4  h-20 w-64 text-xs overflow-y-scroll'>
      {tss.map(t => <li>{Date()} {t}</li>)}
    </ul>

    </main>
  )
}
