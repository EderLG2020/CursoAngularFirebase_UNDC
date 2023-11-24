import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  userData: any;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        // this.router.navigate(['principal']);
      } else {
        // localStorage.setItem('user', '');
        this.router.navigate(['inicio']);
      }
    });
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['principal']);
      })
      .catch((response) => {
        alert('USUARIO O CONTRASEÑA INCORRECTO');
      });
  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  registrar(email: string, password: string, repassword: string) {
    if (password != repassword) {
      window.alert('las contraseñas no coinciden');
    } else {
      this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          window.alert('Se ha registrado el usuario');
          console.log(result.user);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
  }
}
