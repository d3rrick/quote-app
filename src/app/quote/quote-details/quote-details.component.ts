import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../../quote-model'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

   @Input() quotes;
  voteUp(id:number){
  	this.quotes[id].upVote()

  }
  voteDown(id:number){
  	this.quotes[id].downVote()
  	
  }
  delete(id:number){
  	this.quotes.splice(id,1)
   }


  constructor() { 

}

  ngOnInit() {
  }

}
