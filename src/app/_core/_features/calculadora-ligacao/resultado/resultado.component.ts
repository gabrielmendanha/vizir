import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '@core/calculadora-ligacao/resultado/resultado.service';
import { ValorParaExibicao } from '@core/calculadora-ligacao/resultado/resultado.model';
import { CalculadoraLigacaoService } from '@core/calculadora-ligacao/calculadora-ligacao.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  constructor(private _calculadoraLigacaoService: CalculadoraLigacaoService) { }

  private _valorDisplayComPlano: ValorParaExibicao;
  private _valorDisplaySemPlano: ValorParaExibicao;

  ngOnInit(): void {
    this._escutarEventoAtualizacaoPreco();
  }

  private _escutarEventoAtualizacaoPreco(): void {
    this._calculadoraLigacaoService.resultadoComPlano.subscribe((valor: number) => {
      this._valorDisplayComPlano = ResultadoService._transformarValorParaExibicao(valor);
    });

    this._calculadoraLigacaoService.resultadoSemPlano.subscribe((valor: number) => {
      this._valorDisplaySemPlano = ResultadoService._transformarValorParaExibicao(valor);
    });
  }

  public get totalComPlano(): number {
    return this._valorDisplayComPlano?.total ?? 0;
  }

  public get centavosComPlano(): number {
    return this._valorDisplayComPlano?.centavos ?? 0;
  }

  public get totalSemPlano(): number {
    return this._valorDisplaySemPlano?.total ?? 0;
  }

  public get centavosSemPlano(): number {
    return this._valorDisplaySemPlano?.centavos ?? 0;
  }

}
