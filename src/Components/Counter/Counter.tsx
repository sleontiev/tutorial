import React, { FC, useState } from 'react'
import Counter2 from './Counter2';


const Counter = () => {
    const [value, setValue] = useState<number>(0);
    const upValue: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) = () => {
        setValue(value + 1)
    }
    const downValue: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) = () => {
        setValue(value - 1)
    }
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