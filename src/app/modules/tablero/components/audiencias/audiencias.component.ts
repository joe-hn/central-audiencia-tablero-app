import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { audienciaCiclo } from '../../models/dto/audienciaCiclo';
import { audiencia } from '../../models/dto/audiencias';
import { partes } from '../../models/dto/partes';
import { ApiAudienciasService } from '../../services/api-audiencias.service';

@Component({
  selector: 'app-audiencias',
  templateUrl: './audiencias.component.html',
  styleUrls: ['./audiencias.component.css'],
})
export class AudienciasComponent implements OnInit {
  modelAudiencia: audiencia[] = [];
  modelPartes: partes[] = [];
  audiencia: audiencia = new audiencia();
  clock!: Observable<any>;
  count: number = 0;
  modeloListaReproduccion: audienciaCiclo[] = [];

  constructor(private api: ApiAudienciasService) {
    this.clock = timer(0, 1000).pipe();
  }

  ngOnInit(): void {
    this.Get();
  }

  Get() {
    this.api.Get().subscribe((res) => {
      this.modelAudiencia = res;

      this.api.GetPartes().subscribe((res) => {
        this.modelPartes = res;

        this.listaReproduccion();
      });

      /*
      this.clock.subscribe((res) => {
        this.audiencias();
      });
      */
    });
  }

  listaReproduccion() {
    for (let i = 0; i < this.modelAudiencia.length; i++) {
      let listaaudiencia: audienciaCiclo = new audienciaCiclo();

      listaaudiencia.audiencias.id = this.modelAudiencia[i].id;
      listaaudiencia.audiencias.numeroAudiencia =
        this.modelAudiencia[i].numeroAudiencia;
      listaaudiencia.audiencias.numeroExpediente =
        this.modelAudiencia[i].numeroExpediente;
      listaaudiencia.audiencias.tipoAudiencia =
        this.modelAudiencia[i].tipoAudiencia;
      listaaudiencia.audiencias.despacho = this.modelAudiencia[i].despacho;
      listaaudiencia.audiencias.estadoAudiencia =
        this.modelAudiencia[i].estadoAudiencia;
      listaaudiencia.audiencias.hora = this.modelAudiencia[i].hora;

      let c = this.modelPartes.filter(
        (c) => c.audienciaId == this.modelAudiencia[i].id
      ).length;

      switch (true) {
        case c <= 5:
          listaaudiencia.tiempo = 10;
          break;

        case c > 5 && c <= 10:
          listaaudiencia.tiempo = 15;
          break;

        case c > 10 && c <= 25:
          listaaudiencia.tiempo = 20;
          break;

        case c > 25:
          listaaudiencia.tiempo = 25;
          break;
      }

      let v = this.modelPartes.filter(c=> c.id == this.modelAudiencia[i].id);

    }
  }

  audiencias() {
    for (let i = 0; i < this.modelAudiencia.length; i++) {
      console.log('--   CONTADOR: ', this.count);
      if (this.count == i) {
        this.count = this.count + 1;
        this.audiencia.despacho = this.modelAudiencia[i].despacho;
        this.audiencia.estadoAudiencia = this.modelAudiencia[i].estadoAudiencia;
        this.audiencia.hora = this.modelAudiencia[i].hora;
        this.audiencia.id = this.modelAudiencia[i].id;
        this.audiencia.numeroAudiencia = this.modelAudiencia[i].numeroAudiencia;
        this.audiencia.numeroExpediente =
          this.modelAudiencia[i].numeroExpediente;
        this.audiencia.tipoAudiencia = this.modelAudiencia[i].tipoAudiencia;
        break;
      } else if (this.modelAudiencia.length - 1 == i) {
        console.log('-- LLEGO AL FINAL  ');
        this.count = 0;
      }
    }
  }
}
