import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { EmployReg} from '../employreg';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployregService {

  private corsHeaders: HttpHeaders = new HttpHeaders();
   private baseURL = 'http://localhost:9093/api/v2/employs';
  constructor(private httpClient: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
  }
  getEmploysList(): Observable<EmployReg[]> {
    return this.httpClient.get<EmployReg[]>(`${this.baseURL}`);
  }
  createEmploy(employreg: EmployReg): Observable<Object> {
    console.log("Hello");
    return this.httpClient.post(`${this.baseURL}`, employreg);
  }
  //  getEmployById(id: number): Observable<EmployReg> {
  //   return this.httpClient.get<EmployReg>(`${this.baseURL}/${id}`);
  // }
}
