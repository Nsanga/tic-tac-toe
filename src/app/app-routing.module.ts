import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './components/score/score.component';

const routes: Routes = [
  { path: '', component: HomeComponent },       // Route for the home page
  { path: 'score', component: ScoreComponent } // Route for the scores page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
