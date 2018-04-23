
import { Component, OnInit, Input} from '@angular/core';
import {ServeDataService} from '../serve-data.service'
import { Quote } from '../quote-model'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
   providers : [ServeDataService]
})
export class QuoteComponent implements OnInit {
  @Input() quotes
  	sortedQuote(): Quote[] {
     return this.quotes.sort((a, b) => b.upvotes - a.upvotes)
   }
  constructor(private senddata:ServeDataService) { 
    this.quotes = []
    this.senddata
  }
  ngOnInit() {
  }

  voteUp(id:number){
  	this.quotes[id].upVote()

  }
  voteDown(id:number){
  	this.quotes[id].downVote()
  	
  }
  delete(id:number){
    this.senddata.logData("deleting the quote titles:"+ this.quotes[id].quote)
  	this.quotes.splice(id)
   }
  getColor(id:number){
  	if(this.quotes[id].upvotes > this.quotes[id].downvotes){
  		return 'green'
  	}else if(this.quotes[id].downvotes >this.quotes[id].upvotes){
  		return 'red'
  	}else{
  		return 'magenta'
  	}
 }
 seeThis(id){
 	return Math.max(...this.quotes[id].upvotes)
 }
}

