import { Component, OnInit, inject } from '@angular/core';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { ConfirmGame } from '../../interfaces/confirmGames.interface';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {

  private userProfileService = inject(UserProfileServiceService);
  public history: ConfirmGame[] = [];


  ngOnInit(): void {
    this.userProfileService.getHistoryUser()
      .subscribe((resp) => {
        console.log(resp);
        this.history = resp.history;
      });
  }

}
