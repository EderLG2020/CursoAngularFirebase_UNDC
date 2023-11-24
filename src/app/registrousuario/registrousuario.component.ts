import { Component } from '@angular/core';
import { AutenticacionService } from '../service/autenticacion.service';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css'],
})
export class RegistrousuarioComponent {
  constructor(public autservice: AutenticacionService) {}
}
