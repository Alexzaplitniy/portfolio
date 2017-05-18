import { Component, Input, OnInit } from '@angular/core';
import { DeveloperInterface } from '../../models/developer/developer.interface';

@Component({
  moduleId: module.id,
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.scss']
})
export class DevDetailComponent {
  @Input() developer: DeveloperInterface;
}
