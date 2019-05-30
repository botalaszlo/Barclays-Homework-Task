import { Component, OnInit, Input } from '@angular/core';
import { Period } from 'src/app/shared/models/period.model';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {
  @Input() period: Period;

  constructor() { }

  ngOnInit() { }
}
