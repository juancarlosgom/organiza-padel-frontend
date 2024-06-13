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
}
