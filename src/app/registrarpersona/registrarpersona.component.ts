import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../interfaces/persona';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registrarpersona',
  templateUrl: './registrarpersona.component.html',
  styleUrls: ['./registrarpersona.component.css'],
})
export class RegistrarpersonaComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    genero: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public datos: any,
    public ps: PersonaService
  ) {}
  guardar() {
    let datos = this.form.value as Persona;
    this.ps.crearpersona(datos);
  }

  ngOnInit(): void {
    if (this.datos) {
      console.log(this.datos.persona);
      this.form.controls.id.setValue(this.datos.persona.id);
      this.form.controls.nombres.setValue(this.datos.persona.Nombres);
      this.form.controls.apellidos.setValue(this.datos.persona.Apellidos);
      this.form.controls.genero.setValue(this.datos.persona.Genero);
    }
  }
}
