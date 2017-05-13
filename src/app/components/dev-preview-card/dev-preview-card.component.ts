import { Component, Input, OnInit } from '@angular/core';
import { DeveloperInterface } from '../../models/developer/developer.interface';

@Component({
  selector: 'app-dev-preview-card',
  templateUrl: './dev-preview-card.component.html',
  styleUrls: ['./dev-preview-card.component.scss']
})
export class DevPreviewCardComponent {
  @Input() developer: DeveloperInterface;

  constructor() { }

}
