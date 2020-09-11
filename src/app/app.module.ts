import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculadoraLigacaoComponent } from '@core/calculadora-ligacao/calculadora-ligacao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioComponent } from '@core/calculadora-ligacao/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraLigacaoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
