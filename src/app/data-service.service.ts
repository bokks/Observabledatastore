import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private _data : BehaviorSubject<Object> = new BehaviorSubject(Object({}));  
  constructor() {
    this.loadInitialData() ;
   }

  getData(){
    return this._data.asObservable();
  }

  loadInitialData(){

    this._data.next({pyWorkPage:{
    FirstName : 'Suman',
    LastName : 'Bokkasam'
  }});
  }

  

}
