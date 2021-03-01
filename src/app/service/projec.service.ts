import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../models/project.interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProjecService {
  projects: Observable<Project[]>;
  private projectColletion: AngularFirestoreCollection<Project>;

  constructor(private fb: AngularFirestore) {
    this.projectColletion = fb.collection<Project>('projects');
    this.getProyects();
  }

  getProyects() {
    this.projects = this.projectColletion.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const datos = a.payload.doc.data() as Project;
          datos.id = a.payload.doc.id;
          return datos;
        });
      })
    );
  }
}
