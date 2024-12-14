import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { MailComponent } from './mail.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const materialModule = [
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  FormsModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
];

@NgModule({
  declarations: [MailComponent],
  exports: [MailComponent],
  imports: [
    CommonModule,
    AngularSplitModule,
    ...materialModule
  ]
})
export class MailModule { }
