import { AfterViewInit, Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { audienciaCiclo, partesCiclo } from '../../models/dto/audienciaCiclo';
import { audiencia } from '../../models/dto/audiencias';
import { partes } from '../../models/dto/partes';
import { ApiAudienciasService } from '../../services/api-audiencias.service';

@Component({
  selector: 'app-audiencias',
  templateUrl: './audiencias.component.html',
  styleUrls: ['./audiencias.component.css'],
})
export class AudienciasComponent implements OnInit, AfterViewInit {
  modelAudiencia: audiencia[] = [];
  modelPartes: partes[] = [];
  dtoParte: partes[] = [];
  audiencia: audiencia = new audiencia();
  partes: partesCiclo[] = [];
  clock!: Observable<any>;
  count: number = 0;
  countTimer: number = 1;
  countPage: number = 1;
  timePage: number = 1;
  page: number = 0;
  modeloListaReproduccion: audienciaCiclo[] = [];

  alerta: string = 'info';
  mostrarHora: boolean = false;

  constructor(private api: ApiAudienciasService) {
    this.clock = timer(0, 1000).pipe();
  }

  ngAfterViewInit(): void {
    this.Get();
  }

  ngOnInit(): void {}

  async Get() {
    this.modelAudiencia = await this.api.Get().toPromise();
    this.modelPartes = await this.api.GetPartes().toPromise();

    this.listaReproduccion();

    this.clock.subscribe((res) => {
      this.audiencias();
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

        case c > 5 && c <= 15:
          listaaudiencia.tiempo = 30;
          break;

        case c > 15 && c <= 25:
          listaaudiencia.tiempo = 40;
          break;

        case c > 25 && c < 40:
          listaaudiencia.tiempo = 60;
          break;

        case c > 40:
          listaaudiencia.tiempo = 90;
          break;
      }

      let partesaudiencia = this.modelPartes.filter(
        (c) => c.audienciaId == this.modelAudiencia[i].id
      );

      let cpage = 0;
      let page = 0;
      let pp: partesCiclo = new partesCiclo();
      let nn = 1;

      partesaudiencia.forEach((item) => {
        cpage = cpage + 1;

        let pn: partes = new partes();
        pn.item = nn;
        pn.id = item.id;
        pn.nombre = item.nombre;
        pn.tipoParte = item.tipoParte;
        pn.tipoPersona = item.tipoPersona;
        pn.audienciaId = item.audienciaId;
        nn = nn + 1;

        switch (item.tipoParte) {
          case 'Victima':
            pn.flag = true;
            break;                
        }

        pp.partes.push(pn);

        if (cpage == 6) {
          cpage = 0;
          page = page + 1;
          pp.pagina = page;
          listaaudiencia.partesPage.push(pp);
          pp = new partesCiclo();
        }
      });

      if (cpage == 0) {
        page = page + 1;
        pp.pagina = page;
        listaaudiencia.partesPage.push(pp);
      }

      this.modeloListaReproduccion.push(listaaudiencia);
    }
  }

  audiencias() {
    if (this.count < this.modeloListaReproduccion.length) {
      if (this.countTimer == 1) {
        this.mostrarHora = false;

        this.audiencia.despacho =
          this.modeloListaReproduccion[this.count].audiencias.despacho;
        this.audiencia.hora =
          this.modeloListaReproduccion[this.count].audiencias.hora;
        this.audiencia.id =
          this.modeloListaReproduccion[this.count].audiencias.id;
        this.audiencia.numeroAudiencia =
          this.modeloListaReproduccion[this.count].audiencias.numeroAudiencia;
        this.audiencia.numeroExpediente =
          this.modeloListaReproduccion[this.count].audiencias.numeroExpediente;
        this.audiencia.tipoAudiencia =
          this.modeloListaReproduccion[this.count].audiencias.tipoAudiencia;
        this.audiencia.estadoAudiencia =
          this.modeloListaReproduccion[this.count].audiencias.estadoAudiencia;

        switch (this.audiencia.estadoAudiencia) {
          case 'Pendiente de inicio':
            this.alerta = 'primary';
            this.mostrarHora = true;
            break;

          case 'Reprogramada':
            this.alerta = 'warning';
            break;

          case 'Finalizada':
            this.alerta = 'success';
            break;

          case 'Cancelada':
            this.alerta = 'danger';
            break;

          default:
            this.alerta = 'info';
            break;
        }

        this.page = this.modeloListaReproduccion[this.count].partesPage.length;

        this.partes = this.modeloListaReproduccion[
          this.count
        ].partesPage.filter((c) => c.pagina == 1);
      }

      if (this.timePage == 10) {
        if (this.page > 1) {
          this.countPage = this.countPage + 1;
          this.partes = this.modeloListaReproduccion[
            this.count
          ].partesPage.filter((c) => c.pagina == this.countPage);

          if (this.page == this.countPage) {
            this.countPage = 1;
          }
        }
      }

      this.timePage = this.timePage + 1;
      this.countTimer = this.countTimer + 1;

      if (this.countTimer >= this.modeloListaReproduccion[this.count].tiempo) {
        this.count = this.count + 1;
        this.countTimer = 1;
        this.timePage = 1;
      }
    } else {
      this.count = 0;
      this.countTimer = 1;
      this.timePage = 1;

      console.log('--   LLEGO AL FINAL -- ');

      this.Get();
    }
  }
}
