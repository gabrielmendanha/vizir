import { Injectable } from '@angular/core';
import { ValorParaExibicao } from '@core/calculadora-ligacao/resultado/resultado.model';


@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor() { }

  public static _transformarValorParaExibicao(valor: number): ValorParaExibicao {
    return { total: Math.trunc(valor), centavos: parseInt((valor % 1  ).toFixed(2).substring(2), 10) };
  }
}
