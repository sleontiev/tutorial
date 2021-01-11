import { ADD, ADD_NUMBER, RESET, SUB } from "./actions/actionTypes"

type initialStateType = {
    value: number,
}

const initialState = {
    value: 0,
}

export default function rootReducer(state:initialStateType = initialState, action:any) {
    switch(action.type) {
        case ADD:
            return {
                value: state.value + 1
            }
        case ADD_NUMBER:
            return {
                value: state.value + action.payload
            }
        case SUB:
            return {
                value: state.value - 1
            }
        case RESET:
            return {
                value: 0
            }
        default:
            return state
    }

    return state
}