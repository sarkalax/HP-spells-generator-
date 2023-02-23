import { useEffect, useState } from "react"
import kotlik from "./kotlik.png"
import bubble from "./bubble.png"

const App = () => {
  const url = "https://hp-api.onrender.com/api/spells"

  const min = 0
  const max = 76

  const [spell, setSpell] = useState()
  const [descr, setDescr] = useState()
  const [numb, setNumb] = useState(Math.floor(Math.random()*(max-min+1)+min))
  
  const getSpell = async () => {
    const response = await fetch(url) 
    const data = await response.json() 

    setSpell(data[numb]["name"]) 
    setDescr(data[numb]["description"])
  }
  useEffect(() => { 
    getSpell()
  }, [])

  function reloadPage() {
    document.location.reload()
  }

  return (
    <>
      <div className="mainBox">
        <h1>Harry Potter spells</h1>
        {/* <h2>blabla</h2>
        <h3>blablabla</h3> */}
        <h2>{spell}</h2> 
        <h3>{descr}</h3>
        <div>
            <p className="reloadBttn" onClick={reloadPage}>Again</p>
            <img className="imgKotlik" src={kotlik} alt="kotlik" />
        </div>
      </div>
      <div className="bubbles">
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
      </div>
    </>
  )
}

export default App