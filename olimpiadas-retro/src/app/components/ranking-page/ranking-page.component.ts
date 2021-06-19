import { Component, OnInit } from '@angular/core';
import { ApiRankingService } from 'src/app/services/apiranking.service';
import { RankingModel } from 'src/app/services/rankingModel';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {

  listaRankings: RankingModel[] = [];

  constructor( public apiRanking: ApiRankingService) { }

  ngOnInit(): void {
    this.getRankings()
  }

  getRankings():void {
    this.apiRanking.get().subscribe({
      next: (data) => {
        this.listaRankings = data;
      }
    })
  }
}
