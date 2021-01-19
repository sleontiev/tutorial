import React, { FC } from 'react'
import { ClickedContext } from '../ReactContext/ReactContext'

type TypeProps = {
    value?: number,
    upValue?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void),
    downValue?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void),
}

const Counter2: FC<TypeProps> = (props) => {
    return (
        <div>
            <ClickedContext.Consumer>
                { clicked => clicked ? 
                <React.Fragment>
                    <h2>Счётчик { props.value }</h2>
                    <button onClick={props.upValue}>Прибавить 1</button>
                    <button onClick={props.downValue}>Отнять 1</button>
                    <hr/>
                </React.Fragment>
                : null }
            </ClickedContext.Consumer>
        </div>
    )
}

export default Counter2