import { Reducer, Action } from '../ngrx-fake/ngrx';
import { contadorReducer } from './contador.reducer';

export class Store<T> {
    constructor(
        private reducer: Reducer<T>, // El reducer será privado porque no podrá manipularse
        private state: T
    ) { console.log("El estado inicial es: ", this.getState()) }

    getState() {
        return this.state;
    }

    // El dispatch ejecutará una acción usando el reducer
    dispatch(action: Action) {
        this.state = this.reducer(this.state, action)
        console.log("Después del dispatch el estado es: ", this.state);
    }
}
