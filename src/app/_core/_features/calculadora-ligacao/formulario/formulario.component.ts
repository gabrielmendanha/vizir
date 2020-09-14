import { Component, OnInit } from '@angular/core';
import { faCalculator, faHourglass, faAsterisk, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '@core/calculadora-ligacao/formulario/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  private _ampulheta: IconDefinition = faHourglass;
  private _calculadora: IconDefinition = faCalculator;
  private _asterisco: IconDefinition = faAsterisk;

  public form: FormGroup = new FormGroup({
    origem: new FormControl(null, [Validators.required]),
    destino: new FormControl(null, [Validators.required]),
    plano: new FormControl(null, [Validators.required]),
    tempo: new FormControl(null, [Validators.required, Validators.min(1)])
  });

  constructor(private _formularioService: FormularioService) { }

  ngOnInit(): void {
  }

  public getTempoIcon(): IconDefinition {
    return this._ampulheta;
  }

  public getSubmitIcon(): IconDefinition {
    return this._calculadora;
  }

  public getAsteriscoIcon(): IconDefinition {
    return this._asterisco;
  }

  public simular(): void {
    try {
      const { valid } = this.form;

      if (!valid) { return; }

      const valor = this._formularioService.calcularValorLigacao({ ...this.form.value });

    } catch (error) {
      this.form.get('destino').setErrors({ ligacaoInvalida: true });
    }
  }

  public isFormValid(): boolean {
    return this.form.valid;
  }

  public get tempo(): AbstractControl  {
    return this.form.get('tempo');
  }

  public get origem(): AbstractControl  {
    return this.form.get('origem');
  }

  public get destino(): AbstractControl  {
    return this.form.get('destino');
  }

  public get plano(): AbstractControl  {
    return this.form.get('plano');
  }

  public showError(campo: AbstractControl): boolean {
    return campo.invalid && (campo.dirty || campo.touched);
  }

  public getErrorMessage(campo: AbstractControl): string {
    const { dirty, touched } = campo;

    const { ligacaoInvalida } = campo.errors ?? { ligacaoInvalida: false };

    if (ligacaoInvalida) { return 'Destino inválido'; }

    const hasMinError = campo.hasError('min');

    if (hasMinError) { return 'Valor inválido'; }

    const hasRequiredError = campo.hasError('required');

    if (hasRequiredError && (dirty || touched)) { return 'Campo obrigatório'; }
  }
}
