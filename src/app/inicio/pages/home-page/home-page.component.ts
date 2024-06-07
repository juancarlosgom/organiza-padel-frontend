import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  private router = inject(Router);

  goReserveTrack() {

  }

  openPageTournaments() {
    this.router.navigate(['torneos']);
  }

}
