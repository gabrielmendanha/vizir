import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculadoraLigacaoComponent } from '@core/calculadora-ligacao/calculadora-ligacao.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraLigacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
