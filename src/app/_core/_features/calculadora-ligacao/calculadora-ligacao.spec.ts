import { TestBed } from '@angular/core/testing';
import { FormularioService } from '@core/calculadora-ligacao/formulario/formulario.service';
import { CalculadoraParams, TipoPlano } from '@core/calculadora-ligacao/formulario/formulario.models';
import { CalculadoraLigacaoService } from '@core/calculadora-ligacao/calculadora-ligacao.service';

describe('Calculadora do Valor de Ligações', () => {
  let formularioService: FormularioService;
  let calculadoraLigacaoService: CalculadoraLigacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    formularioService = TestBed.inject(FormularioService);
    calculadoraLigacaoService = TestBed.inject(CalculadoraLigacaoService);
  });

  it('deve emitir o valor do resultado com plano', () => {
    spyOn(calculadoraLigacaoService.resultadoComPlano, 'emit');

    const fakeParams: CalculadoraParams = {
      origem: 11,
      destino: 16,
      plano: TipoPlano.FaleMais30,
      tempo: 35
    };

    formularioService.calcularValorLigacao(fakeParams);

    expect(calculadoraLigacaoService.resultadoComPlano.emit).toHaveBeenCalledWith(10.45);
  });

  it('deve emitir o valor do resultado sem plano', () => {
    spyOn(calculadoraLigacaoService.resultadoSemPlano, 'emit');

    const fakeParams: CalculadoraParams = {
      origem: 11,
      destino: 17,
      plano: TipoPlano.FaleMais60,
      tempo: 60
    };

    formularioService.calcularValorLigacao(fakeParams);

    expect(calculadoraLigacaoService.resultadoSemPlano.emit).toHaveBeenCalledWith(102);
  });
});
