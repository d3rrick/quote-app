
import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote-model'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],

})
export class QuoteComponent implements OnInit {

  quotes :Quote[]

  receivedObj(e){
    this.quotes = e;  
  }
   
  	sortedQuote(): Quote[] {
     return this.quotes.sort((a, b) => b.upvotes - a.upvotes)
   }
  // voteUp(id:number){
  // 	this.quotes[id].upVote()

  // }
  // voteDown(id:number){
  // 	this.quotes[id].downVote()
  	
  // }
  // delete(id:number){
  // 	this.quotes.splice(id,1)
  //  }

  constructor() { 
    this.quotes = []
   
  }
  ngOnInit() {
  }
}

