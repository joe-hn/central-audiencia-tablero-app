import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { aviso } from '../../models/dto/aviso';
import { ApiAnunciosService } from '../../services/api-anuncios.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
})
export class AnunciosComponent implements OnInit, AfterViewInit {
  modeloAvisos: aviso[] = [];
  aviso: aviso = new aviso();
  clock!: Observable<any>;
  count: number = 0;
  countTimer: number = 1;

  

  constructor(private api: ApiAnunciosService) {
    this.clock = timer(0, 1000).pipe();
  }

  ngAfterViewInit(): void {
    this.Get();
  }

  ngOnInit(): void {}

  async Get() {
    this.modeloAvisos = await this.api.Get().toPromise();

    this.clock.subscribe((res) => {
      this.reproduccion();
    });
  }

  reproduccion() {
    if (this.count < this.modeloAvisos.length) {
      if(this.countTimer == 1){

        this.aviso.id = this.modeloAvisos[this.count].id;
        this.aviso.duracion = this.modeloAvisos[this.count].duracion;
        this.aviso.avisoId = this.modeloAvisos[this.count].avisoId;
        this.aviso.tipoVideo = this.modeloAvisos[this.count].tipoVideo;
        this.aviso.titulo = this.modeloAvisos[this.count].titulo;
        this.aviso.url = this.modeloAvisos[this.count].url;
      }

      if(this.aviso.duracion == this.countTimer)
      {
        this.count = this.count + 1;
        this.countTimer = 1;

      } else {
        this.countTimer = this.countTimer + 1;
        console.log('-- CONTADOR', this.countTimer, '-- DURACION', this.aviso.duracion)
      }      
    } else {
      this.count = 0;
      this.countTimer = 1;

      this.Get();
    }
  }
}
