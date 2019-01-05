import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-general-comp',
  templateUrl: './general-comp.component.html',
  styleUrls: ['./general-comp.component.css']
})
export class GeneralCompComponent implements OnInit {
  @Input() dataKey : string;
  @Input() dataContext : string;
  

  data : object;
  
  constructor(private dataService: DataServiceService) {

   }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
  });
  }

}
