import { ADD, ADD_NUMBER, RESET, SUB } from "./actionTypes";

export function add(): {type: string} {
    return {
        type: ADD
    }
}

export function sub(): {type: string} {
    return {
        type: SUB
    }
}

export function addNumber(number: number): {type: string, payload: number} {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}

export function reset(): {type: string} {
    return {
        type: RESET
    }
}

export function asyncAdd(number: number) {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(addNumber(number))
        }, 3000)
    }
}
