import { useState, useEffect } from "react"

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  
  function sizeControl() {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    console.log("Já jsem useEffect")
    window.addEventListener("resize", sizeControl)

    return () => { //nespouští se při prvním načtení useEffectu
                    // při dalším se nejdřív spustí cleanUp a až poté se přidá eventListener - nejdřív úklid potom funkce
      console.log("Já jsem clenUp f")
      window.removeEventListener("resize")
    }
  })

  return (
    <>
      <h1>šířka okna</h1>
      <h2>{windowSize}</h2>
    </>
  )
}

export default App