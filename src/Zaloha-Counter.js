import Counter from "./components/Counter"
import { useState, useEffect } from "react"

const App = () => {

  const defaultNumb = 10
  
  return (
    <>
      <h1>Counter</h1>
      <Counter defaultNumb={defaultNumb}/>
    </>
  )
}

export default App