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
            <Counter2
                value = {value}
                upValue={upValue}
                downValue={downValue}
            />
        </div>
    )
}

export default Counter