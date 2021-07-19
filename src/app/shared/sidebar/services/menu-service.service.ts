import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  menuItems: Array<NbMenuItem> = [
    { title: 'Anuncio', icon: 'people-outline', link: '/aviso/lista' },
    {
      title: 'Lista de Reproducción Anuncios',
      icon: 'video-outline',
      link: '/lista-reproduccion-anuncio/lista',
    },    
  ];

  constructor() {}

  getMenu(): Array<NbMenuItem> {
    return this.menuItems;
  }
}
