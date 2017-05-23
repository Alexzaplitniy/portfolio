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
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { routes } from './routes';
import { reducer } from './store/index';

import { DevelopersService } from './services/developers.service';

import { DevelopersCollectionEffect } from './store/developers/developers.effect';

import { DeveloperExistsGuard } from './guards/developer-exists';

import { AppComponent } from './containers/app';
import { NotFoundPageComponent } from './containers/not-found-page';
import { DevListPageComponent } from './containers/dev-list-page/dev-list-page.component';
import { DevViewPageComponent } from './containers/dev-view-page/dev-view-page.component';
import { DevSelectedPageComponent } from './containers/dev-selected-page/dev-selected-page.component';

import { DevPreviewCardComponent } from './components/dev-preview-card/dev-preview-card.component';
import { DevPreviewListComponent } from './components/dev-preview-list/dev-preview-list.component';
import { DevDetailComponent } from './components/dev-detail/dev-detail.component';
import { SearchPipe } from './pipes/searh.pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    DevPreviewCardComponent,
    DevPreviewListComponent,
    DevListPageComponent,
    DevViewPageComponent,
    DevSelectedPageComponent,
    DevDetailComponent,
    SearchPipe,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(DevelopersCollectionEffect),
  ],
  providers: [
    DevelopersService,
    DeveloperExistsGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
