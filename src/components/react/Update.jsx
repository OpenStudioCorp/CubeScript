import React from 'react'

function Update({ update }) {

  const styles = {
    div: 'min-h-[10rem] shadow-md hover:shadow-2xl hover:scale-105 bg-black/60 w-[90%] md:w-[30rem] rounded-md border-2 p-2 flex flex-col gap-y-2',
    h1: 'text-xl italic uppercase',
    h2: 'text-md font-bold text-slate-400',
    p: 'font-bold'
  }

  return (
    <div class={styles.div}>
      <h1 class={styles.h1}>{update.version}</h1>
      <h2 class={styles.h2}>{update.date}</h2>
      <p class={styles.p}>{update.description}</p>
    </div>
  )
}

export default Update