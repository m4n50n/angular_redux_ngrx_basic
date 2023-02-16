import { Component, OnInit } from '@angular/core';
import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // A partir de aquí usaremos ya la librería de Redux
    // Crear el store por defecto usando la librería de redux y pasando nuestro reducer
    const store: Store = createStore(contadorReducer);

    // Suscribirnos a los cambios de la store
    store.subscribe(() => console.log("Subscriber store: ", store.getState()));

    // Tras inicializar el store, directamente ya podremos pasar nuestras acciones al reducer
    // El reducer cambia el estado actual en base a la acción que le pasemos
    // La acción tendrá un nombre (type) y un payload (datos opcionales que podemos pasar para que el reducer los use)
    store.dispatch(incrementadorAction);
  }
}
