import { Component } from '@angular/core';
import { AutenticacionService } from '../service/autenticacion.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistrousuarioComponent } from '../registrousuario/registrousuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    public autservice: AutenticacionService,
    public dialog: MatDialog
  ) {
    //
  }

  openDialog() {
    this.dialog.open(RegistrousuarioComponent);
  }
}
