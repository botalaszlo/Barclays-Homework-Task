import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodComponent } from './period.component';
import { MatButtonModule, MatIconModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { PeriodRateComponent } from '../period-rate/period-rate.component';
import { PERIODS } from 'src/app/core/mocks/periods.mock';

describe('PeriodComponent', () => {
  let component: PeriodComponent;
  let fixture: ComponentFixture<PeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodComponent, PeriodRateComponent ],
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
    fixture = TestBed.createComponent(PeriodComponent);
    component = fixture.componentInstance;
    component.period = PERIODS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
