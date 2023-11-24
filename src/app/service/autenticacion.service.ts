import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  userData: firebase.User | null = null;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        // Puedes manejar la sesión de usuario aquí
        // sessionStorage.setItem('user', JSON.stringify(this.userData));
        // Además, puedes guardar datos específicos del usuario si es necesario
      } else {
        this.userData = null;
        // Si el usuario no está autenticado, elimina los datos de la sesión
        // sessionStorage.removeItem('user');
        // Si prefieres mantener ciertos datos, simplemente establece userData en null
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
    this.router.navigate(['login']);
  }

  registrar(email: string, password: string, repassword: string) {
    if (password !== repassword) {
      window.alert('Las contraseñas no coinciden');
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

  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await this.afAuth.signInWithPopup(provider);
      this.router.navigate(['principal']);
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  }

  async loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await this.afAuth.signInWithPopup(provider);
      this.router.navigate(['principal']);
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error);
      alert(
        'Error al iniciar sesión con Facebook. Por favor, inténtalo de nuevo.'
      );
    }
  }

  isLoggedIn(): boolean {
    return !!this.userData;
  }
}
