export enum TipoPlano {
  FaleMais30,
  FaleMais60,
  FaleMais120,
}

export interface CalculadoraParams {
  origem: number;
  destino: number;
  plano: TipoPlano;
  tempo: number;
}

export interface ValorParaExibicao {
  total: string;
  centavos: string;
}

export class Tarifa {
  private tempo: number;
  private origem: number;
  private destino: number;

  private tarifa = new Map([
    [11, new Map([
      [16, 1.90],
      [17, 1.70],
      [18, 1.90]
    ])],
    [16, new Map([
      [11, 2.90],
    ])],
    [17, new Map([
      [11, 2.70],
    ])],
    [18, new Map([
      [11, 1.90]
    ])]
  ]);

  constructor(tempo: number, origem: number, destino: number) {
    this.tempo = tempo;
    this.origem = origem;
    this.destino = destino;
  }

  public calcularValorTarifa(params: CalculadoraParams): number {
    return;
  }

  public isTarifaValida(params: CalculadoraParams): void {
    return;
  }
}
