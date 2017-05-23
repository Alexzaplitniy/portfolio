import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();

  onSearch(value: string) {
    this.search.emit(value);
  }
}
