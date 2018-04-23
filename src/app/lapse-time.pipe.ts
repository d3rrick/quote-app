import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lapseTime'
})
export class LapseTimePipe implements PipeTransform {

  transform(value: any): any{
    var now = new Date()
    var seconds = (Math.round((now.getTime() - value.getTime())/1000))
    var minuites = Math.round(seconds/60)
    if(seconds <= 45){
      return "a few seconds ago"
    }
    else if(seconds <= 90){
      return "a minuites ago"
    }

    
  }

}
