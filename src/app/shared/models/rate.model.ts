import { Period } from './period.model';

export interface Rate {
    name: string;
    code: string;
    countryCode: string;
    periods: Period[];
}
