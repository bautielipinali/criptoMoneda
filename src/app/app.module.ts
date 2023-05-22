
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Agrega esta línea para importar FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaCriptosComponent } from './componentes/lista-criptos/lista-criptos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCriptosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
