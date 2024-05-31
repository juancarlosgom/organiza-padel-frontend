import { Component, OnInit, inject } from '@angular/core';
import { Players } from '../../interfaces/player.interface';
import { RankingService } from '../../services/ranking.service';

@Component({
  selector: 'app-ranking-app-page',
  templateUrl: './ranking-app-page.component.html',
  styleUrl: './ranking-app-page.component.css'
})
export class RankingAppPageComponent implements OnInit {

  private rankingService = inject(RankingService);

  public category: string = '1';
  public gender: string = 'M';

  public playersM1: Players[] = [];
  public playersM2: Players[] = [];
  public playersM3: Players[] = [];
  public playersM4: Players[] = [];
  public playersM5: Players[] = [];
  public playersF1: Players[] = [];
  public playersF2: Players[] = [];
  public playersF3: Players[] = [];
  public playersF4: Players[] = [];
  public playersF5: Players[] = [];


  ngOnInit(): void {
    this.rankingService.getPlayers()
      .subscribe((resp) => {
        if (resp.status) {
          this.mountPlayers(resp.players);
        } else {
          console.log('Error');
        }
      });
  }

  mountPlayers(players: Players[]) {
    for (let player of players) {
      if (player.genero === 'M') {
        if (player.categoria === '1') {
          this.playersM1.push(player);
        } else if (player.categoria === '2') {
          this.playersM2.push(player);
        } else if (player.categoria === '3') {
          this.playersM3.push(player);
        } else if (player.categoria === '4') {
          this.playersM4.push(player);
        } else if (player.categoria === '5') {
          this.playersM5.push(player);
        }
      } else {
        if (player.categoria === '1') {
          this.playersF1.push(player);
        } else if (player.categoria === '2') {
          this.playersF2.push(player);
        } else if (player.categoria === '3') {
          this.playersF3.push(player);
        } else if (player.categoria === '4') {
          this.playersF4.push(player);
        } else if (player.categoria === '5') {
          this.playersF5.push(player);
        }
      }
    }
    this.orderPlayers(this.playersF1);
    this.orderPlayers(this.playersF2);
    this.orderPlayers(this.playersF3);
    this.orderPlayers(this.playersF4);
    this.orderPlayers(this.playersF5);
    this.orderPlayers(this.playersM1);
    this.orderPlayers(this.playersM2);
    this.orderPlayers(this.playersM3);
    this.orderPlayers(this.playersM4);
    this.orderPlayers(this.playersM5);
  }

  orderPlayers(players: Players[]) {
    players.sort((a: Players, b: Players) => {
      if (a.ranking === b.ranking) {
        return (b.partidasGanadas - b.partidasPerdidas) - (a.partidasGanadas - a.partidasPerdidas);
      } else {
        return b.ranking - a.ranking;
      }
    });
  }

}
