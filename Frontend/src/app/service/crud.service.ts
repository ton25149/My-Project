import { Injectable } from '@angular/core';
import { Travel } from './Travel';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class CrudService {
 // 1. Node/Express API
 REST_API: string = 'http://localhost:3000/api';
 // 2. Http Header
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 // 3. Injection
 constructor(private httpClient: HttpClient) { }
 // 4.1 Add
 AddTravel(data: Travel): Observable<any> {
 let API_URL = `${this.REST_API}/infohome`;
 return this.httpClient.post(API_URL, data)
 .pipe(
 catchError(this.handleError)
 )
 }
 // 4.2 Get all objects
 GetTravels() {
 return this.httpClient.get(`${this.REST_API}`);
 }
 // 4.3 Get single object
 GetTravel(id:any): Observable<any> {
 let API_URL = `${this.REST_API}/read-travel/${id}`;
 return this.httpClient.get(API_URL, { headers: this.httpHeaders })
 .pipe(map((res: any) => {
 return res || {}
 }),
 catchError(this.handleError)
 )
 }
 // 4.4 Update
 updateTravel(id:any, data:any): Observable<any> {
 let API_URL = `${this.REST_API}/update-travel/${id}`;
 return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
 .pipe(
 catchError(this.handleError)
 )
 }
 // 4.5 Delete
 deleteTravel(id:any): Observable<any> {
 let API_URL = `${this.REST_API}/delete-travel/${id}`;
 return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
 catchError(this.handleError)
 )
 }
 // 5. Error Handle
 handleError(error: HttpErrorResponse) {
 let errorMessage = '';
 if (error.error instanceof ErrorEvent) {
 // Handle client error
 errorMessage = error.error.message;
 } else {
 // Handle server error
 errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 }
 console.log(errorMessage);
 return throwError(errorMessage);
 }
}
