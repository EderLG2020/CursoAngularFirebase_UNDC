import { Component, ViewChild } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarpersonaComponent } from '../registrarpersona/registrarpersona.component';
import { Persona } from '../interfaces/persona';

@Component({
  selector: 'app-listarpersona',
  templateUrl: './listarpersona.component.html',
  styleUrls: ['./listarpersona.component.css'],
})
export class ListarpersonaComponent {
  encabezado: string[] = ['DNI', 'NOMBRES', 'APELLIDOS', 'GENERO', 'ACCIONES'];
  datos = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(public ps: PersonaService, public dialog: MatDialog) {}
  ngOnInit() {
    this.ps.listarpersonas().subscribe((documentos) => {
      this.datos.data = documentos;
    });
  }
  ngAfterViewInit(): void {
    this.datos.paginator = this.paginator;
    this.datos.sort = this.sort;
  }

  aplicarfiltro(event: Event) {
    const filtervalue = (event.target as HTMLInputElement).value;
    this.datos.filter = filtervalue.trim().toLowerCase();
    if (this.datos.paginator) {
      this.datos.paginator.firstPage();
    }
  }

  eliminar(id: string) {
    this.ps
      .eliminarpersona(id)
      .then(() => {
        window.alert('Dato eliminada');
      })
      .catch(() => {
        window.alert('Error al eliminar el Dato:');
      });
  }

  editar(p: Persona) {
    this.dialog.open(RegistrarpersonaComponent, {
      data: { persona: p, disableClose: true },
    });
  }
}
