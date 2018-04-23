import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import {ServeDataService} from './serve-data.service'
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Quote } from './quote-model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
 


	@ViewChild('f') quoteForm: NgForm;
	public quotes :Quote[]
	defaultName = 'new user'
	defaultAuthor = 'Angular framework'
	none: string = 'none'
	defaultQuote = "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop"
	categories: string[] = ['philosophy','religion','science','technology','arts','mutivation']
    date: Date
    counter = 0
	onAddQuote(){
		console.log(this.quoteForm)
		this.quotes.push(new Quote(this.counter++,this.quoteForm.value.name,this.quoteForm.value.quote,this.quoteForm.value.author,this.date,0,0,this.quoteForm.value.category))
		this.serveData.storeDataMethod(this.quotes).subscribe(
             (response)=> console.log(response),
             (error)=>console.log(error)
			)
		this.quoteForm.reset()
	
	}
	constructor(private serveData: ServeDataService){
		  const httpOptions = {
			  headers: new HttpHeaders({
			    'Content-Type':  'application/json',
			    'Authorization': 'my-auth-token'
			  })
			};
		this.quotes = []
		// this.http.get("https://talaikis.com/api/quotes/random/")
		// .subscribe(data=>{
		// 	console.log(data)
		// },
		// error=>{
		//   alert("there was an error!")
		// })
		
		
	
	}
  
}
