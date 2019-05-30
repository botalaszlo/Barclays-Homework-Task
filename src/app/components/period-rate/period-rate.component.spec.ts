import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodRateComponent } from './period-rate.component';
import { MatListModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { PERIOD_RATE } from 'src/app/core/mocks/period-rates.mock';

describe('PeriodRateComponent', () => {
  let component: PeriodRateComponent;
  let fixture: ComponentFixture<PeriodRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodRateComponent ],
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
    fixture = TestBed.createComponent(PeriodRateComponent);
    component = fixture.componentInstance;
    component.periodRate = PERIOD_RATE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
