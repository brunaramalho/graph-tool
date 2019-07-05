import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: FormGroup;

  constructor(fb: FormBuilder, public dialog: MatDialog) {
    this.options = fb.group({
      n: [3, Validators.min(1)],
    });
  }

  openDialog() {
    this.dialog.open(ReconhecimentoDialog);
  }

  algoritmo = {
    value: "1"
  }

  lista = `1: [2,3]
2: [1]
3: [1]`
  matriz = `[0,1,1]
[1,0,0]
[1,0,0]`
}

@Component({
  selector: 'reconhecimento',
  templateUrl: 'reconhecimento.html',
})
export class ReconhecimentoDialog {}