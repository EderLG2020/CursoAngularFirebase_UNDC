import { Component } from '@angular/core';
import { AutenticacionService } from '../service/autenticacion.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarpersonaComponent } from '../registrarpersona/registrarpersona.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  constructor(
    public autservice: AutenticacionService,
    public dialog: MatDialog
  ) {}

  abrirregistrarpersona() {
    this.dialog.open(RegistrarpersonaComponent);
  }
}
