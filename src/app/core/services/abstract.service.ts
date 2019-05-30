import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class AbstractService {

    constructor(protected http: HttpClient) { }

    /**
     * Handle failed http operations.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

        console.error(`${operation}: ${error.message}`);
        console.error(error);

        return of(result as T);
        };
    }
}
