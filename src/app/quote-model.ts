export class Quote {
	id : number
	name: string
	quote: string
	author: string
	dateAdded: Date
	upvotes:number
	downvotes:number
	category:string
    
	constructor(id:number,name: string,quote: string,author: string,dateAdded: Date,upvotes:number,downvotes:number,category:string){
    this.id = id
    this.name = name
	this.quote = quote
	this.author = author
	this.dateAdded = new Date()
	this.upvotes = upvotes
	this.downvotes = downvotes
	this.category = category
	}
	upVote(){
		this.upvotes++
	}
	downVote(){
		this.downvotes++
	}
}