import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BmiInformationComponent } from './bmi-information.component';


@NgModule({
  imports: [ SharedModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [BmiInformationComponent],
  exports: [BmiInformationComponent]
})
export class BmiInformationComponentModule {}
