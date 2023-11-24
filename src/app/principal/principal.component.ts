import { Component } from '@angular/core';
import { AutenticacionService } from '../service/autenticacion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  constructor(public autservice: AutenticacionService) {}
}
