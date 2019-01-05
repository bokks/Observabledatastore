import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-comp',
  templateUrl: './general-comp.component.html',
  styleUrls: ['./general-comp.component.css']
})
export class GeneralCompComponent implements OnInit {
  @Input() dataKey : string;
  @Input() dataContext : string;
  data : object = {
    pyWorkPage : {
      FirstName : "Suman",
      LastName : "Bokkasam"
    }
  }

  dataKey1:string;

  
  constructor() {

   }

  ngOnInit() {
    this.dataKey1 = this.data[this.dataContext][this.dataKey];
  }

}
