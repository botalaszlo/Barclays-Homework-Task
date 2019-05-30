import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateComponent } from './rate.component';
import { MatButtonModule, MatIconModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { PeriodComponent } from '../period/period.component';
import { PeriodRateComponent } from '../period-rate/period-rate.component';
import { RATES } from 'src/app/core/mocks/rates.mock';

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateComponent, PeriodComponent, PeriodRateComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    component.rate = RATES[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
