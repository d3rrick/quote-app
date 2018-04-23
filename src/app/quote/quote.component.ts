import { Component, OnInit, Input} from '@angular/core';
import { Quote } from '../quote-model'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quotes

  	sortedQuote(): Quote[] {
     return this.quotes.sort((a, b) => b.upvotes - a.upvotes)
   }

  constructor() { 
    this.quotes = []
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
  	this.quotes.splice(id)
   }
  getColor(id:number){
  	// return this.quotes[id].upvotes>=5?'green':'red'
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

