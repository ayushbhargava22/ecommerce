import { Babysuit } from './../models/babysuit';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = " http://localhost:3000/babybodysuit"

@Injectable({
  providedIn: 'root'
})
export class BabysuitService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Babysuit[]> {
    return this.http.get<Babysuit[]>(apiUrl);
  }
}
