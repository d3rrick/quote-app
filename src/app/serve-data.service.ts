import { Injectable } from '@angular/core';
import { Quote } from './quote-model'
import {Http} from '@angular/http'

@Injectable()
export class ServeDataService {

 logData(info){
 	
 	alert(info)
 }
 constructor(private http:Http){}
  storeDataMethod(data:any){
  	return this.http.post("https://quote-app-87646.firebaseio.com/data.json",data)
  }
 

}	