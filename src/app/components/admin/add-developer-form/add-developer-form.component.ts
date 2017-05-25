import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeveloperInterface } from '../../../models/developer/developer.interface';
import { Developer } from '../../../models/developer/developer';

@Component({
  selector: 'app-add-developer-form',
  templateUrl: './add-developer-form.component.html',
  styleUrls: ['./add-developer-form.component.scss']
})
export class AddDeveloperFormComponent implements OnInit {
  @Output() add: EventEmitter<DeveloperInterface> = new EventEmitter();
  public user: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      slug: ['', [Validators.required, Validators.minLength(2)]],
      position: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      tags: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.user.valid) {
      this.add.emit(this.user.value);
      this.user.reset();
    }
  }

}
