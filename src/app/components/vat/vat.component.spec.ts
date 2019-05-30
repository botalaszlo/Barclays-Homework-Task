import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatComponent } from './vat.component';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MockPipe } from 'src/app/core/mocks/filter.pipe.mock';
import { RateComponent } from '../rate/rate.component';
import { PeriodComponent } from '../period/period.component';
import { PeriodRateComponent } from '../period-rate/period-rate.component';
import { VAT } from 'src/app/core/mocks/vat.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VatComponent', () => {
  let component: VatComponent;
  let fixture: ComponentFixture<VatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VatComponent,
        RateComponent,
        PeriodComponent,
        PeriodRateComponent,
        MockPipe ],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatComponent);
    component = fixture.componentInstance;
    component.vat = VAT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
