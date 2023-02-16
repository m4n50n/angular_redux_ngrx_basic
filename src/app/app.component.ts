import { Component, OnInit } from '@angular/core';
import { contadorReducer } from './contador/contador.reducer';
import {
  incrementadorAction,
  decrementadorAction,
  multiplicarAction,
  dividirAction,
  resetAction
} from './contador/contador.actions';
import { Store } from './contador/contador.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Usar el reducer directamente
    console.clear();
    console.log("El resultado de INCREMENTAR: " + contadorReducer(10, incrementadorAction));
    console.log("El resultado de DECREMENTAR: " + contadorReducer(10, decrementadorAction));
    console.log("El resultado de MULTIPLICAR: " + contadorReducer(10, multiplicarAction));
    console.log("El resultado de DIVIDIR: " + contadorReducer(10, dividirAction));
    console.log("El resultado de RESET: " + contadorReducer(10, resetAction));

    // Usando la store y dispatch
    const store = new Store(contadorReducer, 10); // 10 será el estado inicial de la aplicación
    store.dispatch(incrementadorAction); // Suma 1, así que 10 + 1 = 11
    store.dispatch(decrementadorAction); // Resta 1, así que 11 -1  = 10
  }
}
