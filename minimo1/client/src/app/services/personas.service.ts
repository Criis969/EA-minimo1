import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  API_URI = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get(`${this.API_URI}/personas`);
  }

  getPersona(id : string){
    return this.http.get(`${this.API_URI}/persona/${id}`);
  }
}
