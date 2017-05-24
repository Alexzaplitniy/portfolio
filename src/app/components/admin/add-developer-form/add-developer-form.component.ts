import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-developer-form',
  templateUrl: './add-developer-form.component.html',
  styleUrls: ['./add-developer-form.component.scss']
})
export class AddDeveloperFormComponent implements OnInit {
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

}
