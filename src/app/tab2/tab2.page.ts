import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  countBmi(mass: number, height: number) {
    let bmiValue = (mass / (height * height) * 703);
    return bmiValue;
  }
}
