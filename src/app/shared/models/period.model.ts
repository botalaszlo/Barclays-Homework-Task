import { PeriodRate } from './period-rate.model';

export interface Period {
    effectiveFrom: string;
    rates: PeriodRate;
}
