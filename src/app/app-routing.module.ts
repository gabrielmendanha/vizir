import { RouterModule, Routes } from '@angular/router';
import { CalculadoraLigacaoComponent } from '@core/calculadora-ligacao/calculadora-ligacao.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CalculadoraLigacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
