import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent, ReconhecimentoDialog } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

import { AppService } from './rest.service'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ReconhecimentoDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    HttpModule
  ],
  entryComponents: [
    ReconhecimentoDialog
  ],
  providers: [AppService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
