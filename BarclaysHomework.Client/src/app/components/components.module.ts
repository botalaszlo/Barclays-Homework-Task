import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VatComponent } from './vat/vat.component';
import { RateComponent } from './rate/rate.component';
import { PeriodComponent } from './period/period.component';
import { PeriodRateComponent } from './period-rate/period-rate.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './vat/filter.pipe';

@NgModule({
  declarations: [
    VatComponent,
    RateComponent,
    PeriodComponent,
    PeriodRateComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    VatComponent,
    RateComponent,
    PeriodComponent,
    PeriodRateComponent
  ]
})
export class ComponentsModule { }
