import { Rate } from './rate.model';

export interface Vat {
    details: string;
    version: number | null;
    rates: Rate[];
}
