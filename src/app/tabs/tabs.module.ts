import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';


@NgModule({
  imports: [
    IonicModule,
    SharedModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
