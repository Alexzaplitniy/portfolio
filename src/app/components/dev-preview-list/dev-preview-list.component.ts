import { Component, Input, OnInit } from '@angular/core';
import { DeveloperInterface } from '../../models/developer/developer.interface';

@Component({
  selector: 'app-dev-preview-list',
  templateUrl: './dev-preview-list.component.html',
  styleUrls: ['./dev-preview-list.component.scss']
})
export class DevPreviewListComponent {
  @Input() list: DeveloperInterface[];
}
