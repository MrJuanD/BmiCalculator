import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() massUnit: string;
  @Input() heightUnit: string;
  @Input() countBmi: any;
  selectMass;
  selectHeight;
  bmiValue: number;
  bmiColor="";
  bmiCategory: number;
  userClicked = false;
  constructor() {}

  ngOnInit() {
    this.selectMass = new FormControl(null, [Validators.required]);
    this.selectHeight = new FormControl(null, [Validators.required]);
  }

  showBmi() {
    this.userClicked = false;
    console.log(this.selectMass);
    console.log(this.selectHeight);
    this.bmiValue = this.countBmi(this.selectMass.value, this.selectHeight.value);
    this.bmiValue =  Number.parseFloat(this.bmiValue.toFixed(2));  
    this.setBmiCategory();
  }
  showInfo() {
    this.userClicked = true;
  }
  setBmiCategory() {
    if (this.bmiValue) {
      if (this.bmiValue < 16) {
        this.bmiColor = "bmi-color1";
        this.bmiCategory = 1;
      }
      else if (16 <= this.bmiValue && this.bmiValue <= 16.99) {
        this.bmiColor = "bmi-color2";
        this.bmiCategory = 1;
      } 
      else if (17 <= this.bmiValue && this.bmiValue <= 18.49) {
        this.bmiColor = "bmi-color3";
        this.bmiCategory = 1;
      } 
      else if (18.5 <= this.bmiValue && this.bmiValue <= 24.99) {
        this.bmiColor = "bmi-color4";
        this.bmiCategory = 2;
      } 
      else if (25 <= this.bmiValue && this.bmiValue <= 29.99) {
        this.bmiColor = "bmi-color5";
        this.bmiCategory = 3;
      } 
      else if (30 <= this.bmiValue && this.bmiValue <= 34.99) {
        this.bmiColor = "bmi-color6";
        this.bmiCategory = 4;
      } 
      else if (35 <= this.bmiValue && this.bmiValue <= 39.99) {
        this.bmiColor = "bmi-color7";
        this.bmiCategory = 4;
      } 
      else if (40 <= this.bmiValue) {
        this.bmiColor = "bmi-color8";
      } 
    }
  }
}
