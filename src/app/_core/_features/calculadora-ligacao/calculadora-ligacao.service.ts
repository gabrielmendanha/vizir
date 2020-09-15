import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraLigacaoService {

  public resultadoComPlano: EventEmitter<number> = new EventEmitter<number>();

  public resultadoSemPlano: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public zerarCampos(): void {
    this.resultadoComPlano.emit(0);
    this.resultadoSemPlano.emit(0);
  }
}
