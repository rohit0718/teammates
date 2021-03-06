import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeammatesCommonModule } from '../../components/teammates-common/teammates-common.module';
import { Pipes } from '../../pipes/pipes.module';
import { StudentHomePageComponent } from './student-home-page.component';

/**
 * Module for student home page.
 */
@NgModule({
  declarations: [
    StudentHomePageComponent,
  ],
  exports: [
    StudentHomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    Pipes,
    TeammatesCommonModule,
  ],
})
export class StudentHomePageModule { }
