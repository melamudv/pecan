import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ITree} from '../shared/interface';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class DataService {

  baseUrl: string = '../assets/';

  constructor(private http: HttpClient) { }

  getTree(): Observable<ITree[]> {
    const url = this.baseUrl + 'tree.json';
    return this.http.get<ITree[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }

}
