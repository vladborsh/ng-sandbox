import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      count: 0
    });
  }
}
