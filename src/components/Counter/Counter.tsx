import {useState} from "react";
import "./Counter.css"

const Counter = ()=>{
    function handlerClick():void{
        //batch
        setValue(value+1)
    }
    const [value, setValue] = useState(240)
    return (
        <>
            <p>Value: {value}</p>
            <button onClick={handlerClick}>Up</button>
        </>
    )
}
export default Counter