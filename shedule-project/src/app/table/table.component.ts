import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TimePipe } from '../time.pipe';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'shedule-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private dataService: DataService) { }
  sheduleData;
  datesArray = [];
  theDayAfterTomorrowDate: string;
  querySerach: string = "";
 

  ngOnInit() {

    this.getDatesArray(new Date());
    this.getDataFromServer(this.datesArray[0]);
    this.getTheDayAfterTomorrowDate(new Date());
    this.dataService.query.subscribe(res => this.querySerach = res);
  }

  getDatesArray(date) {

    for (var i = 0; i <= 2; i++) {
      
      if (i) {
        date.setDate(date.getDate() + 1);
      }

      this.datesArray.push(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
    }

  }

  getTheDayAfterTomorrowDate(date) {
    date.setDate(date.getDate() + 2);
    var currentDateArr = date.toDateString().split(" ");
    this.theDayAfterTomorrowDate = currentDateArr[0].toUpperCase() + ', ' + currentDateArr[1].toUpperCase() + ' ' + currentDateArr[2];
  }

  getDataFromServer(date: string) {
    this.sheduleData = [];
    this.dataService.getData(date).subscribe(res => {
      res.area_data.forEach((data) => {
 
         if (data.class_types.length) {
           data.class_types.forEach(data => {
 
             if (data.classes.length) {
              this.sheduleData.push(data.classes[0]);
             }
 
           }); 
         }
         
       });

     });
  }
}