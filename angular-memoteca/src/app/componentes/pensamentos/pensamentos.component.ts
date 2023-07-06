import { Router } from '@angular/router';
import { PensamentosService } from './pensamentos.service';
import { Component } from '@angular/core';
import { Pensamento } from './pensamento';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent {

  //Atributo para representar o formulario
  //Sinal de excessao de operador não nulo !
  formulario!: FormGroup;

  constructor(
    private service: PensamentosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: ['Angular CLI'],
      modelo: ['modelo2']
    })
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
