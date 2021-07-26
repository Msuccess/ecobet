import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { TopbarComponent } from './elements/topbar/topbar.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent,
  ],
  exports: [FooterComponent, HeaderComponent, TopbarComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
