import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getDados() : Observable<Documents[]>{
    return this.http.get<Documents[]>(`http://localhost:8888/api/listar`);
  }
}
