import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MenuServiceService } from './services/menu-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: Array<NbMenuItem> = [];

  constructor(private menu: MenuServiceService) {
    this.items = menu.getMenu();
  }

  ngOnInit(): void {}
}
