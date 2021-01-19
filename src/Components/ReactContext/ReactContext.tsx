import React, { FC } from 'react'
import Counter from '../Counter/Counter'

type TypeProps = {
    changeClicked?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void),
    clickedValue?: boolean | any,
}

export const ClickedContext = React.createContext(null)

const LastIteration: FC<TypeProps> = (props) => {
    return (
        <>
        <button onClick={props.changeClicked}>Click</button>
        <ClickedContext.Provider value = {props.clickedValue}>
            <Counter/>
        </ClickedContext.Provider>
        </>
    )
}

export default LastIteration
