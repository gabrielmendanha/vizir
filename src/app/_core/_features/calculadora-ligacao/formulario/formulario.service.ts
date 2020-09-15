import { Injectable } from '@angular/core';
import { CalculadoraParams, Tarifa } from '@core/calculadora-ligacao/formulario/formulario.models';
import { CalculadoraLigacaoService } from '@core/calculadora-ligacao/calculadora-ligacao.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private _calculadoraLigacaoService: CalculadoraLigacaoService) { }

  public calcularValorLigacao(params: CalculadoraParams): void | never {
    const { tempo, origem, destino, plano } = params;

    const tarifa = new Tarifa(tempo, origem, destino, plano);

    const isLigacaoValida: boolean = tarifa.validar();

    if (!isLigacaoValida) { throw Error; }

    const valorComPlano = tarifa.calcularValorTarifaComPlano();

    const valorSemPlano = tarifa.calcularValorTarifaSemPlano();

    this._calculadoraLigacaoService.resultadoComPlano.emit(valorComPlano);

    this._calculadoraLigacaoService.resultadoSemPlano.emit(valorSemPlano);
  }
}
