import { Component, OnInit,ViewChild,EventEmitter,Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Quote } from '../quote-model'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],

})
export class QuoteFormComponent implements OnInit {
  @ViewChild('f') quoteForm: NgForm;

  @Output() mydata = new EventEmitter();
	defaultName = 'new user';
	defaultAuthor = 'Angular framework';
	none: string = 'none';
	defaultQuote = "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop";
	categories: string[] = ['philosophy','religion','science','technology','arts','mutivation'];
  date: Date;
  counter = 0;
  myArr :Quote[]

  onAddQuote(){
    	this.myArr.push(new Quote(this.counter++,this.quoteForm.value.name,this.quoteForm.value.quote,this.quoteForm.value.author,this.date,0,0,this.quoteForm.value.category))
    	this.mydata.emit(this.myArr);
    	this.quoteForm.reset()
		}

  constructor() {
  this.myArr = []
   }

  ngOnInit() {
  }

}
