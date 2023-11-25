import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Persona } from '../interfaces/persona';
import { map, Observable } from 'rxjs';

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

  listarpersonas() {
    //console.log(suscriptor)
    return this.firestore
      .collection('PERSONA')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  eliminarpersona(id: string): any {
    return this.firestore.collection('PERSONA').doc(id).delete();
  }
}
