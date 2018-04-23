import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  transform(value: any): any {
    if(value == 0){
    	return value +" upvotes"
    }else if(value == 1){
    	return value+" upvote"
    }else{
    	return value+ " upvotes"
    }
  }

}
