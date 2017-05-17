import { Component, Input, OnInit } from '@angular/core';
import { DeveloperInterface } from '../../models/developer/developer.interface';

@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.scss']
})
export class DevDetailComponent implements OnInit {
  @Input() developer: any;

  constructor() { }

  ngOnInit() {
    console.log(this.developer, '@Input()');
  }

}