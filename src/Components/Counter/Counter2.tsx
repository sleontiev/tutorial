import React from 'react'
import { ClickedContext } from '../LastIteration/LastIteration'

export default (props:any) => {
    return (
        <div>
            <ClickedContext.Consumer>
                { clicked => clicked ? <p>Clicked</p> : null }
            </ClickedContext.Consumer>
        </div>
    )
}