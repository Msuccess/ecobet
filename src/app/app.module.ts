import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './modules/pages.module';

import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { StoreKeys, StoreStates } from './app.store.states';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsModule.forRoot([...StoreStates], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      ...StoreKeys,
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsActionsExecutingModule.forRoot(),
    LayoutsModule,
    NgbModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
