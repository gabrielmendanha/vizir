import { Injectable } from '@angular/core';
import {CalculadoraParams, ValorParaExibicao, Tarifa} from '@core/calculadora-ligacao/formulario/formulario.models';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  private _transformarValorParaExibicao(valor: number): ValorParaExibicao {
    return { total: '1', centavos: '98' };
  }

  public calcularValorLigacao(params: CalculadoraParams): ValorParaExibicao {
    const { tempo, origem, destino } = params;

    const tarifa = new Tarifa(tempo, origem, destino);

    const isLigacaoValida: boolean = tarifa.validar();

    if (!isLigacaoValida) { throw Error; }

    const valor = tarifa.calcularValorTarifa(params);

    return this._transformarValorParaExibicao(valor);
  }
}
