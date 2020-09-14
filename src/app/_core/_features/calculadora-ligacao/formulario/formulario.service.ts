import { Injectable } from '@angular/core';
import {CalculadoraParams, ValorParaExibicao, Tarifa} from '@core/calculadora-ligacao/formulario/formulario.models';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  private _transformarValorParaExibicao(valor: number): ValorParaExibicao {
    return;
  }

  public calcularValorLigacao(params: CalculadoraParams): ValorParaExibicao {
    try {
      const { tempo, origem, destino } = params;

      const tarifa = new Tarifa(tempo, origem, destino);

      tarifa.isTarifaValida(params);

      const valor = tarifa.calcularValorTarifa(params);

      return this._transformarValorParaExibicao(valor);

    } catch (error) {
      throw error;
    }

  }
}
