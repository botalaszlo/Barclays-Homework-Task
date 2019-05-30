import { Component, OnInit, Input } from '@angular/core';
import { PeriodRate } from 'src/app/shared/models/period-rate.model';

@Component({
  selector: 'app-period-rate',
  templateUrl: './period-rate.component.html',
  styleUrls: ['./period-rate.component.scss']
})
export class PeriodRateComponent implements OnInit {
  @Input() periodRate: PeriodRate;

  constructor() { }

  ngOnInit() { }
}
