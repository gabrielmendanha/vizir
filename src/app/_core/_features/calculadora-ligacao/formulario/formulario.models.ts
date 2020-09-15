export enum TipoPlano {
  FaleMais30 = 30,
  FaleMais60 = 60,
  FaleMais120 = 120,
}

export interface CalculadoraParams {
  origem: number;
  destino: number;
  plano: TipoPlano;
  tempo: number;
}

export class Tarifa {
  private tempo: number;
  private origem: number;
  private destino: number;
  private plano: TipoPlano;

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

  constructor(tempo, origem, destino, plano) {
    this.tempo = parseInt(tempo, 10);
    this.origem = parseInt(origem, 10);
    this.destino = parseInt(destino, 10);
    this.plano = parseInt(plano, 10);
  }

  public calcularValorTarifaComPlano(): number {
    const tempoPago = this.tempo - this.plano;

    if (tempoPago < 0) { return 0; }

    const tarifa = this._getTarifa();

    const tarifaComAcrescimo = (tarifa + (tarifa * 0.1));

    return parseFloat((tempoPago * tarifaComAcrescimo).toFixed(2));
  }

  public calcularValorTarifaSemPlano(): number {
    return parseFloat((this._getTarifa() * this.tempo).toFixed(2));
  }

  public validar(): boolean {
    const destinos = this.tarifa.get(this.origem);

    if (!destinos) { return false; }

    return destinos.has(this.destino);
  }

  private _getTarifa(): number {
    const destinos = this.tarifa.get(this.origem);
    return destinos.get(this.destino);
  }
}
