import { Injectable } from '@angular/core';
import { TagsService } from './tags.service';
import { PortfolioService } from './portfolio.service';
import { DeveloperInterface } from '../models/developer/developer.interface';
import { Observable } from 'rxjs/Observable';
import { DevelopersService } from './developers.service';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { PortfolioInterface } from '../models/porfolio/portfolio.interface';

@Injectable()
export class DeveloperCollectionService {
  private _list$: Observable<DeveloperInterface[]>;

  constructor(
    private developers: DevelopersService,
    private tags: TagsService,
    private portfolio: PortfolioService
  ) {
    this._init();
  }

  public getList(): Observable<DeveloperInterface[]> {
    return this._list$;
  }

  private _init(): void {
    this._list$ = combineLatest(
      this.developers.getList(),
      this.portfolio.getList(),
      this.tags.getList(),
      (developers, portfolio, tags) => developers.map((developer: DeveloperInterface) => {
        developer.projects =  portfolio.filter((work: PortfolioInterface) => work.developers.includes(developer.$key));
        developer.tags = developer.tags.map((tag) => tags[tag].$value);

        return developer;
      })
    );
  }
}
