import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-bmi-information',
  templateUrl: './bmi-information.component.html',
  styleUrls: ['./bmi-information.component.scss'],
})
  export class BmiInformationComponent implements OnInit {
  @Input() mass: number;
  @Input() massUnit: string;
  @Input() height: number;
  @Input() heightUnit: string;
  @Input() bmiValue: number;
  @Input() bmiCategory: number;
  @Input() bmiColor: string;

  constructor() {}

  ngOnInit() {
  }
}
