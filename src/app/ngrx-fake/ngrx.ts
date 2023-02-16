// Por ahora, este archivo será una simulación de la librería ngrx

// ACTIONS
export interface Action {
    type: string; // 
    payload?: any; // Parámetros que mandaremos a la acción (opcional)
}

// REDUCER
export interface Reducer<T> {
    (state: T, action: Action): T // T Función que regresará siempre el tipo genérico
}
