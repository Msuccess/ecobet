import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { LotteryResultsComponent } from './partials/lottery-results/lottery-results.component';
import { LotteryGamesComponent } from './partials/lottery-games/lottery-games.component';
import { TestimonialsComponent } from './partials/testimonials/testimonials.component';
import { ContactUsComponent } from './partials/contact-us/contact-us.component';
import { TeamsComponent } from './partials/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  declarations: [
    HomeComponent,
    LotteryResultsComponent,
    LotteryGamesComponent,
    TestimonialsComponent,
    ContactUsComponent,
    TeamsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
