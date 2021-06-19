import { Component, Input, OnInit } from '@angular/core';
import { ModalidadesModel } from 'src/app/services/modalidades-model';

@Component({
  selector: 'app-modalidade-card',
  templateUrl: './modalidade-card.component.html',
  styleUrls: ['./modalidade-card.component.css']
})
export class ModalidadeCardComponent implements OnInit {

  @Input() modalidade: ModalidadesModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
