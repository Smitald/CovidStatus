import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) {}

    getCountries():Observable<any>{
      const url = "https://api.covid19api.com/countries"
      return this.http.get<any>(url)
  }

  //   getCoronaRealData(country:any):Observable<any>{
  //      const url = "https://api.covid19api.com/total/country/"+ country
  //      return this.http.get<any>(url)
  // }
  getCountryByData(country:any):Observable<any>{
    const url = "https://api.covid19api.com/country/" + country +"/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
    return this.http.get<any>(url)
}

}
