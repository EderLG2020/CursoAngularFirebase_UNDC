import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private firestore: AngularFirestore) {}
  crearpersona(data: Persona) {
    this.firestore
      .collection('PERSONA')
      .doc(data.id)
      .set({
        Nombres: data.nombres,
        Apellidos: data.apellidos,
        Genero: data.genero,
      })
      .then(() => {
        window.alert('Se ha guardado la persona');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
}
