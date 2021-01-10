import React, { useState } from 'react'
import Counter2 from './Counter2';

const Counter: (props:any) => JSX.Element= (props:any) => {
    const [value, setValue] = useState<number>(0);
    const upValue: () => void = () => {
        setValue(value + 1)
    }
    const downValue: () => void = () => {
        setValue(value - 1)
    }
    console.log(props)
    return (
        <div style = {{
            width: '200px',
            margin: '0 auto',
        }}>
            <p>{ value }</p>
            <button onClick={upValue}>UP</button>
            <button onClick={downValue}>DOWN</button>
            <hr/>
            <Counter2/>
        </div>
    )
}

export default Counter