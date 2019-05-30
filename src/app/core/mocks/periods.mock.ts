import { Period } from 'src/app/shared/models/period.model';
import { PERIOD_RATE } from './period-rates.mock';

export const PERIODS: Period[] = [
    { effectiveFrom: '0001-01-01', rates: PERIOD_RATE },
    { effectiveFrom: '2018-01-10', rates: PERIOD_RATE }
];
