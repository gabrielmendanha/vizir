import { Component, OnInit } from '@angular/core';
import {faCalculator, faHourglass, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  private _ampulheta: IconDefinition = faHourglass;
  private _calculadora: IconDefinition = faCalculator;

  constructor() { }

  ngOnInit(): void {
  }

  public getTempoIcon(): IconDefinition {
    return this._ampulheta;
  }

  public getSubmitIcon(): IconDefinition {
    return this._calculadora;
  }

}
