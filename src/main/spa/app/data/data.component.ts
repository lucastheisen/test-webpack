import { Component } from '@angular/core';

@Component({
  selector: 'my-data',
  styleUrls: ['./data.component.scss'],
  templateUrl: './data.component.html'
})
export class DataComponent  { 
    name = 'default name'; 
    description = 'default description';
}