// components/TeamNameInput.tsx
'use client'

import { useState } from 'react'

export default function TeamNameInput({ label }: { label: string }) {
  const [teamName, setTeamName] = useState('')

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-black">{label}</label>
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        className="w-full border rounded px-3 py-2 text-black"
        placeholder="Nome do time"
      />
    </div>
  )
}
