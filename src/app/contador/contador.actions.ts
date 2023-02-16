import { Action } from "../ngrx-fake/ngrx"

// Aquí tendremos todas las acciones del módulo "contador"
export const incrementadorAction: Action = {
    type: "INCREMENTAR"
}

export const decrementadorAction: Action = {
    type: "DECREMENTAR"
}

export const multiplicarAction: Action = {
    type: "MULTIPLICAR",
    payload: 2
}

export const dividirAction: Action = {
    type: "DIVIDIR",
    payload: 2
}

export const resetAction: Action = {
    type: "RESET"
}
