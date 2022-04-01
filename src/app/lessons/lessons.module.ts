import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FirstComponent} from './first/first.component';
import { MyColorDirective } from './customDirective/my-color.directive';
import { MyEventDirectiveDirective } from './customDirective/my-event-directive.directive';
import { MyColorChangeDirective } from './customDirective/my-color-change.directive';

@NgModule({
  declarations: [
    FirstComponent,
    MyColorDirective,
    MyEventDirectiveDirective,
    MyColorChangeDirective
  ],
  exports: [
    FirstComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LessonsModule { }
