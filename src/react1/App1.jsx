import React, { useState } from 'react'
import Students from './Student';



function App1() {
  const students=[
    { id: 1, fullname: "mario rossi", avg: 6, gender: 'm' },
    { id: 2, fullname: "luigi verdi", avg: 4, gender: 'm' },
    { id: 3, fullname: "peach pink", avg: 8, gender: 'f' },
    { id: 4, fullname: "wario rossi", avg: 9, gender: 'm' },
    { id: 5, fullname: "daisy princess", avg: 10, gender: 'f' },
  ];
  const [cercaS,setCercaS]=useState("")
  const [res,setRes]=useState([])
  
 

  function studentSearch() {
    const query = cercaS.trim().toLowerCase();
    const results = students.filter(
      (student) => student.fullname.toLowerCase().includes(query)
    )
    setRes(results)
    
   
  }

  return (
    <div className="flex flex-row  justify-center items-center ">
    <Students students={res.length > 0 ? res : students}  />
    <div >
      <h1 className='text-2xl p-8 m-4 '>Lista degli studenti</h1>
      <div >
        <input className='text-2xl p-4 m-4 hover:bg-slate-300 ' type="text" placeholder="Cerca per nome" value={cercaS} onChange={(e) => setCercaS(e.target.value)} />
        <button className='bg-emerald-400 rounded-2xl p-8' onClick={() => studentSearch()}>Cerca</button>
      </div>
     {res.length === 0 && <p className='text-2xl p-8 m-4 ' >Nessuno studente con questo nome</p>}
    </div>
   
    </div>
  )
}

export default App1
