import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];
  public secondMenu: MenuItem[] = [];
  public isSmallScreen: boolean = false;

  //Escucho los eventos del elemento asociado cambio de tamaño de ventana
  @HostListener('window:resize', ['$event'])
  changeSize(event: any) {
    this.checkScreenSize();
    this.mountMenus();
  }


  ngOnInit(): void {
    this.checkScreenSize();
    this.mountMenus();
  }

  mountMenus() {
    if (!this.isSmallScreen) {
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

      if (localStorage.getItem('admin') == 'isAdmin') {
        this.menuItems.push({
          label: 'Crear nuevo torneo',
          routerLink: 'create-tournament',
        });
      }

      if (localStorage.getItem('token')) {
        this.secondMenu = [
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
    } else {
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

      if (localStorage.getItem('admin') == 'isAdmin') {
        this.menuItems.push({
          label: 'Crear nuevo torneo',
          routerLink: 'create-tournament',
        });
      }
      if (localStorage.getItem('token')) {
        this.menuItems.push({
          label: 'Mi perfil',
          routerLink: 'userProfile/my-account'
        });
      } else {
        this.menuItems.push({
          label: 'Login',
          routerLink: 'auth/login'
        });
        this.menuItems.push({
          label: 'Sing Up',
          routerLink: 'auth/register'
        });
      }
    }
  }

  checkScreenSize() {
    //Para obtener el tamaño de la pantalla
    this.isSmallScreen = window.innerWidth <= 960;
  }



}
