import { Component, Input, OnInit } from '@angular/core';
import { RankingModel} from '../../services/rankingModel'



@Component({
  selector: 'app-rankingcard',
  templateUrl: './rankingcard.component.html',
  styleUrls: ['./rankingcard.component.css']
})
export class RankingcardComponent implements OnInit {

  @Input() pais: RankingModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
