import { Component, OnInit } from '@angular/core';
import { ApimodalidadeService } from 'src/app/services/apimodalidade.service';
import { ModalidadesModel } from 'src/app/services/modalidades-model';

@Component({
  selector: 'app-modalidades-page',
  templateUrl: './modalidades-page.component.html',
  styleUrls: ['./modalidades-page.component.css']
})
export class ModalidadesPageComponent implements OnInit {

  listaModalidades: ModalidadesModel[] = [];

  constructor(public modalidadesApi: ApimodalidadeService) { }

  ngOnInit(): void {
    this.modalidadesApi.get().subscribe({
      next: (retornoApi) => {
        this.listaModalidades = retornoApi;
      }
    });
  }
}
