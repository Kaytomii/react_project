import {useEffect, useState} from 'react'

const Test = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('test')
    }, [])
    return (<button onClick={() => {
        setCount(count + 1)
    }}>Up {count}</button>)
}
export default Test