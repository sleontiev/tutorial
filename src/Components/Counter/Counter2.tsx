import React from 'react'
import { ClickedContext } from '../ReactContext/ReactContext'

export default (props:any) => {
    return (
        <div>
            <ClickedContext.Consumer>
                { clicked => clicked ? 
                <React.Fragment>
                    <h2>Счётчик { props.value }</h2>
                    <button onClick={props.upValue}>Вычесть 1</button>
                    <button onClick={props.downValue}>Отнять 1</button>
                    <hr/>
                </React.Fragment>
                : null }
            </ClickedContext.Consumer>
        </div>
    )
}