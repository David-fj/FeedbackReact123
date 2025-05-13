import { useState } from "react"
import Cardinicial from "./components/Cardinicial.jsx"
import Cardfinal from "./components/Cardfinal.jsx"

export function App() {
  const [submited, setSubimited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  return(
    submited === false ? ( 
    <Cardinicial setSubmited={setSubimited} rateNote={rateNote} setRateNote={setRateNote}/>
    ) : (
      <Cardfinal rateNote={rateNote}/>
    )

  )
}