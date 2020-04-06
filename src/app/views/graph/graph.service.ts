import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }

  loadGraph() {
    return this.http.get('http://localhost:8080/loadGraph')
  }

  getNodes() {
    return this.http.get('http://localhost:8080/showNodes')
  }

  getLinks() {
    return this.http.get('http://localhost:8080/showLinks')
  }
}
