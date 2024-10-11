import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component'; // Importa il tuo componente

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent // Dichiara qui il componente car-list
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Importa HttpClientModule per fare richieste HTTP
  ],
  providers: [],
  bootstrap: [AppComponent] // Il componente che avvia l'app
})
export class AppModule { }