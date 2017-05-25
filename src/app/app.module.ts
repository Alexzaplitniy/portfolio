import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdminComponent } from './containers/admin/admin.component';
import { AddDeveloperComponent } from './containers/admin/add-developer/add-developer.component';
import { AddDeveloperFormComponent } from './components/admin/add-developer-form/add-developer-form.component';
import { TagsService } from './services/tags.service';
import { PortfolioService } from './services/portfolio.service';
import { DeveloperCollectionService } from "app/services/developer-collection.service";

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
    AdminComponent,
    AddDeveloperComponent,
    AddDeveloperFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(DevelopersCollectionEffect),
  ],
  providers: [
    DeveloperCollectionService,
    DevelopersService,
    TagsService,
    PortfolioService,
    DeveloperExistsGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
