import { Component, OnInit, inject } from '@angular/core';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { Statistics } from '../../interfaces/statistics.interface';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent implements OnInit {

  private userProfileService = inject(UserProfileServiceService);
  public statistics?: Statistics;


  ngOnInit(): void {
    this.userProfileService.getStatisticsUser()
      .subscribe((resp) => {
        console.log(resp);
        this.statistics = resp.stastistics;
      });
  }
}
