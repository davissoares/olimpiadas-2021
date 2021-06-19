import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { ModalidadesPageComponent } from './components/modalidades-page/modalidades-page.component';
import { RankingPageComponent } from './components/ranking-page/ranking-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenuTemplateComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
        },
        {
          path: 'modalidades',
          component: ModalidadesPageComponent
        },
        {
          path: 'ranking',
          component: RankingPageComponent
        }
      ]
    }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};
