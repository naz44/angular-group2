import { Component } from '@angular/core';

@Component({
  selector: 'app-group2',
  templateUrl: './group2.component.html',
  styleUrls: ['./group2.component.css']
})
export class Group2Component {
   list:any[];
   
   constructor()
   {
     this.list=[
       {showValues:false,name:"Nithya",lastname:"C",place:"Hyderabad",dob:"13-01-2000",occupation:"Student"},
       {showValues:false,name:"Nazish",lastname:"Sk",place:"Hyderabad",dob:"13-05-2000",occupation:"Student"},
       {showValues:false,name:"Shruthi",lastname:"P",place:"Hyderabad",dob:"13-02-2000",occupation:"Stylist"},
       {showValues:false,name:"Sharon",lastname:"C",place:"Hyderabad",dob:"13-07-2000",occupation:"Hacker"}   
      ];
   }

}
