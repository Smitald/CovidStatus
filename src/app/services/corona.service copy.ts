import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {


  private url = "https://api.covid19api.com/countries";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic Auth ' + btoa('username:password'),
      'Access-Control-Allow-Origin': '*',
    })
  }
  constructor(private http:HttpClient) {}

    getCountries():Observable<any>{
      //const url = "https://api.covid19api.com/countries"
      return this.http.get<any>(this.url, this.httpOptions)
  }

    getCoronaRealData(country:any):Observable<any>{
       const url = "https://api.covid19api.com/total/country/"+ country
       return this.http.get<any>(url, this.httpOptions)
  }

  getTotal():Observable<any>{
    const url = "https://api.covid19api.com/world/total"
    return this.http.get<any>(url, this.httpOptions)
}

}
