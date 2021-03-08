import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDog} from '../interfaces/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IDog[]> {
    return this.http.get<IDog[]>(`${this.API_URL}/dogs`);
  }
}
