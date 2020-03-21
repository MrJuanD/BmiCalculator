import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { BmiInformationComponentModule } from '../bmi-information/bmi-information.module';

@NgModule({
  imports: [ SharedModule, FormsModule, IonicModule, ReactiveFormsModule, BmiInformationComponentModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
