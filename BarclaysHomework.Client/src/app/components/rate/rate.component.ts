import { Component, OnInit, Input } from '@angular/core';
import { Rate } from 'src/app/shared/models/rate.model';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() rate: Rate;

  constructor() { }

  ngOnInit() {  }
}
