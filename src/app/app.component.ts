import { Component } from '@angular/core';
import {CoronaService} from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries:any
  country:any
  Status:Number
  Cases:Number
  Date:Date
  Country:String



  constructor(private corona:CoronaService){}

  ngOnInit(){
 
    this.corona.getCountries().subscribe((data)=>{
    console.log(data)
    this.countries = data
    })

  }
  getCoronaData(){
    this.corona.getCountryByData(this.country).subscribe((data)=>{
    
      var index = data.length - 1
      this.Status = data[index].Status
      this.Cases = data[index].Cases
      this.Date = data[index].Date
      this.Country = data[index].Country
    })
  }
  

  getCountry(event:any){
    this.country = (<HTMLInputElement>event.target).value
  }


}
