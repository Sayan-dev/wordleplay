import React from 'react'
import GameBody from '../components/gameBody'

export default function Wordle() {
  return (
    <div className='container mx-auto w-screen py-4 items-center flex flex-col justify-center'>
        <div className="mb-10">
            <span className="font-mono text-7xl">Wordle</span>
        </div>
        <div>
            <GameBody/>
        </div>
    </div>
  )
}
