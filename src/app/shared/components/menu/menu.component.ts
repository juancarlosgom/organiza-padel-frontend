import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];
  public secondMenu: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Inicio',
        routerLink: 'inicio'
      },
      {
        label: 'Partidas',
        items: [
          {
            label: 'Partidas abiertas',
            routerLink: 'partidas/open'
          },
          {
            label: 'Crear partida',
            routerLink: 'partidas/new',
          },
          {
            label: 'Reservar pista',
            routerLink: 'partidas/reserveTrack',
          },
        ]
      },
      {
        label: 'Torneos',
        routerLink: 'torneos'
      },
      {
        label: 'Ranking App',
        routerLink: 'rankingApp'
      },
    ];

    if (localStorage.getItem('token')) {
      this.secondMenu = [
        /*{
          label: 'Login',
          routerLink: 'auth/login'
        },
        {
          label: 'Sing Up',
          routerLink: 'auth/register'
        },*/
        {
          label: 'Mi perfil',
          routerLink: 'userProfile/my-account'
        },
      ];

    } else {
      this.secondMenu = [
        {
          label: 'Login',
          routerLink: 'auth/login'
        },
        {
          label: 'Sing Up',
          routerLink: 'auth/register'
        },
      ];
    }

  }

}
