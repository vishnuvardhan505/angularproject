import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const endpoint = 'http://127.0.0.1:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CrudeserviceService {
  constructor(private http: HttpClient) { }
  saveEnquiries(enqData): Observable<any> {
    // console.log(contactformdata);
    return this.http.post(endpoint + 'saveenquiries', enqData);
  }
  getAllEnquiries(): Observable<any> {
    // console.log(contactformdata);
    return this.http.get(endpoint + 'getAllEnquiries');
  }
}
