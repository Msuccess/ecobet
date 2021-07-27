import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private store: Store) {}

  public getErrors(errors: any): any {
    try {
      return (
        errors && Object.keys(errors).map((k) => errors[k].map((e: any) => e))
      );
    } catch (err) {
      if (errors.message) {
        return [errors.message];
      }

      if (errors.detail) {
        return [errors.detail];
      }

      return this.getErrorStatus(errors);
    }
  }

  public handleCatchError(err: any, title: any): Observable<never> {
    const errors = this.getErrors(err.error);
    // this.store.dispatch(new NotifyError({ message: errors.join('\n'), title }));
    return throwError(err);
  }

  private getErrorStatus(error: any): any {
    switch (error.status) {
      case 0:
        return ['Please Check Internet Connection'];
      case 400:
        return ['Operation Unsuccessful'];
      case 401:
        return ['Unauthorized Access'];
      case 403:
        return ['Forbidden Access'];
      case 500:
        return ['An unexpected error occurred'];
      default:
        return ['Something went wrong'];
    }
  }
}
