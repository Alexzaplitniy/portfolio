import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DBModule } from '@ngrx/db';

import { environment } from '../environments/environment';
import { routes } from './routes';
import { schema } from './db';
import { reducer } from './store/index';

import { DevelopersService } from './services/developers.service';

import { AppComponent } from './containers/app';
import { NotFoundPageComponent } from './containers/not-found-page';
import { DevListPageComponent } from './containers/dev-list-page/dev-list-page.component';
import { DevViewPageComponent } from './containers/dev-view-page/dev-view-page.component';

import { DevPreviewCardComponent } from './components/dev-preview-card/dev-preview-card.component';
import { DevPreviewListComponent } from './components/dev-preview-list/dev-preview-list.component';
import { EffectsModule } from '@ngrx/effects';
import { DevelopersCollectionEffect } from './store/developers/developers.effect';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    DevPreviewCardComponent,
    DevPreviewListComponent,
    DevListPageComponent,
    DevViewPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MaterialModule,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(DevelopersCollectionEffect),
    DBModule.provideDB(schema),
  ],
  providers: [DevelopersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
