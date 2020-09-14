import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculadoraLigacaoComponent } from '@core/calculadora-ligacao/calculadora-ligacao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioComponent } from '@core/calculadora-ligacao/formulario/formulario.component';
import { ResultadoComponent } from '@core/calculadora-ligacao/resultado/resultado.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraLigacaoComponent,
    FormularioComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
