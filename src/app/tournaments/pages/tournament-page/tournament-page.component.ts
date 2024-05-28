import { Component, OnInit, inject } from '@angular/core';
import { Tournament } from '../../interfaces/tournament.interface';
import { TournamentService } from '../../services/tournament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrl: './tournament-page.component.css'
})
export class TournamentPageComponent implements OnInit {

  public tournaments: Tournament[] = [];
  private tournamentService = inject(TournamentService);
  private router = inject(Router);


  ngOnInit(): void {
    this.tournamentService.getTournaments()
      .subscribe((resp) => {
        if (resp.status) {
          //console.log(resp.tournaments);
          this.tournaments = resp.tournaments;
        } else {
          console.log('Error al obtener torneos');
        }
      });
  }

  openSignUpTournament(idTournament: number) {
    this.router.navigate(['torneos/sing-up-tournament', idTournament]);
  }

  /*private urlImg: string = '../../../../assets/images/';
  public tournaments: Tournament[] = [
    {
      img: this.urlImg + 'torneo1.jpg',
      title: 'Torneo 1',
      description: 'Descripción 1',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
    {
      img: this.urlImg + 'torneo2.jpg',
      title: 'Torneo 2',
      description: 'Descripción 2',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
    {
      img: this.urlImg + 'torneo3.jpg',
      title: 'Torneo 3',
      description: 'Descripción 3',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
    {
      img: this.urlImg + 'torneo4.jpg',
      title: 'Torneo 4',
      description: 'Descripción 4',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
    {
      img: this.urlImg + 'torneo5.jpg',
      title: 'Torneo 5',
      description: 'Descripción 5',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
    {
      img: this.urlImg + 'torneo6.jpg',
      title: 'Torneo 6',
      description: 'Descripción 6',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
    {
      img: this.urlImg + 'torneo7.jpg',
      title: 'Torneo 7',
      description: 'Descripción 7',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
    {
      img: this.urlImg + 'torneo8.jpg',
      title: 'Torneo 8',
      description: 'Descripción 8',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
    {
      img: this.urlImg + 'torneo9.jpg',
      title: 'Torneo 9',
      description: 'Descripción 9',
      imgBackground: this.urlImg + 'imgBackground.webp',
    },
  ];*/

}
