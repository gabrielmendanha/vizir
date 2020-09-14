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

  constructor(tempo, origem, destino) {
    this.tempo = parseInt(tempo, 10);
    this.origem = parseInt(origem, 10);
    this.destino = parseInt(destino, 10);
  }

  public calcularValorTarifa(params: CalculadoraParams): number {
    return;
  }

  public validar(): boolean {
    const destinos = this.tarifa.get(this.origem);

    if (!destinos) { return false; }

    const valorBaseTarifa = destinos.has(this.destino);

    if (!valorBaseTarifa) { return false; }

    return true;
  }
}
