// components/ScorePanel.tsx
'use client'

import { useState } from 'react'

export default function ScorePanel({ team }: { team: string }) {
  const [score, setScore] = useState(0)

  const increment = () => setScore(score + 1)
  const decrement = () => setScore(score > 0 ? score - 1 : 0)
  const reset = () => setScore(0)

  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full max-w-xs">
      <h2 className="text-lg font-semibold mb-2 text-black">{team}</h2>
      <div className="text-4xl font-bold mb-4 text-black">{score}</div>
      <div className="flex gap-2 justify-center">
        <button onClick={decrement} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">-</button>
        <button onClick={reset} className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500">Reset</button>
        <button onClick={increment} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>
      </div>
    </div>
  )
}
