import { Action } from '../ngrx-fake/ngrx';
// Función REDUCER (recibe el state / state antiguo (actual) y una action)
// Esta función SIEMPRE retornará un estado
// Podemos tener varios reducers para separar la lógica de la aplicación
// Dentro del reducer no haremos peticiones HTTP ni resolveremos nada del exterior
export const contadorReducer = (state = 10, action: Action) => {
    // Dentro del reducer se aconseja usar Switch y no if/else
    switch (action.type) {
        case "INCREMENTAR":
            return state += 1;
        case "DECREMENTAR":
            return state -= 1;
        case "MULTIPLICAR":
            return state * action.payload;
        case "DIVIDIR":
            return state / action.payload;
        case "RESET":
            return state = 0;
        default:
            return state;
    }
}
