import { Component, HostListener, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserProfileServiceService } from '../../../user-profile/services/user-profile-service.service';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];
  public secondMenu: MenuItem[] = [];
  public isSmallScreen: boolean = false;
  public loading: boolean = false;
  private userProfileService = inject(UserProfileServiceService);

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
            label: 'Iniciar Sesión',
            routerLink: 'auth/login'
          },
          {
            label: 'Registrarme',
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
          label: 'Iniciar Sesión',
          routerLink: 'auth/login'
        });
        this.menuItems.push({
          label: 'Registrarme',
          routerLink: 'auth/register'
        });
      }
    }
  }

  checkScreenSize() {
    //Para obtener el tamaño de la pantalla
    this.isSmallScreen = window.innerWidth <= 960;
  }


  logout(): void {
    //console.log('Cerrar sesión.');
    this.loading = true;
    this.userProfileService.logoutUser().subscribe();
    setTimeout(() => {
      localStorage.removeItem('token');
      if (localStorage.getItem('admin')) {
        localStorage.removeItem('admin');
      }
      window.location.reload();
      this.loading = false;
    }, 2000);

  }

  checkUser(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }


}
