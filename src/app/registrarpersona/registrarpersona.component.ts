import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { PersonaService } from '../service/persona.service';

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

  // constructor(public ps: PersonaService) {}
}
