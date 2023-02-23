import "./Counter.css"
import {useState} from "react"

const Counter = (props) => {

    const {defaultNumb} = props

    const [numb, setNumb] = useState(defaultNumb)

    function substract() {
        setNumb(numb-1)
    }
    function add() {
        setNumb(numb+1)
    }
    function resetNumb() {
        setNumb(defaultNumb)
    }

    return (
        <div className="divCounter">
        <button onClick={substract}>-</button> <span className="numb">{numb} </span> <button onClick={add}>+</button>
        <button onClick={resetNumb}>Reset</button>
        </div>
    )
}

export default Counter