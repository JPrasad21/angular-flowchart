import { Component, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
declare var LeaderLine: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  line;
  line1;
  ngOnInit(){

  }
  ngAfterViewInit(){ 
    console.log("hello");
    setTimeout(() => {
      this.start();
    },1000);
    
  }
  ngAfterViewChecked(){
    
  }
  start(){
console.log(LeaderLine);
var start = document.getElementById('start');

var end = document.getElementById('end');
var end1 = document.getElementById('end1');
if(start && end && end1){
  this.line = new LeaderLine(
      start,
      end,{
        color: '#002948',
        size: 2,
        path: "fluid",
        startPlug: 'disc',
        startPlugSize: 2,
        endPlug: 'arrow3',
        endPlugSize: 2
      }
);
  this.line1 = new LeaderLine(
      start,
      end1,{
        color: '#002948',
        size: 2,
        path: "fluid",
        startPlug: 'disc',
        startPlugSize: 2,
        endPlug: 'arrow3',
        endPlugSize: 2
      }
);
}
  }
  reDraw(){
     
    this.line.position();
    this.line1.position();
  }



onDrag(event) {
   this.line.position();
   this.line1.position();
}


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.line.position();
    this.line1.position();
  }
}
