import React from 'react'

function Update({ update }) {

  return (
    <div class="min-h-[10rem] shadow-md hover:shadow-2xl hover:scale-105 bg-black/60 w-[90%] md:w-[30rem] rounded-md border-2 p-2 flex flex-col gap-y-2">
      <h1 class="text-xl italic uppercase">{update.version}</h1>
      <h2 class="text-md font-bold text-slate-300/50">{update.date}</h2>
      <p class="font-bold">{update.description}</p>
      <p class='font-semibold'>Changes</p>
      <ul class="list-inside list-disc flex flex-col gap-y-1 justify-center shadow-2xl md:shadow-md px-2 max-w-full rounded-md">
        {update.changes.length > 0 && update.changes.map(update => (
          <li key={update.index}>{update.description}</li>
        ))}
      </ul>
    </div>
  )
}

export default Update