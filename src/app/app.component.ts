import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      n: [3, [Validators.min(1), Validators.max(30)]],
    });
  }

  algoritmo = {
    value: "1"
  }

  lista = `1,2
0
0`
  matriz = `0,1,1
1,0,0
1,0,0`
}
