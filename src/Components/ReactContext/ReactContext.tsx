import React, { useState } from 'react'
import Counter from '../Counter/Counter'

export const ClickedContext = React.createContext(false)

const LastIteration: (props:any) => JSX.Element = (props:any) => {
    console.log(props)
    return (
        <>
        <button onClick={props.changeClicked}>Click</button>
        <ClickedContext.Provider value = {props.clickedValue}>
            <Counter 
                clickedValueProps = {props.clickedValue}
            />
        </ClickedContext.Provider>
        </>
    )
}

export default LastIteration
