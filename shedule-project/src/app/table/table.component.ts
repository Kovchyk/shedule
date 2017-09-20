import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { TimePipe } from "../pipes/time.pipe";
import { FilterPipe } from "../pipes/filter.pipe";

@Component({
  selector: "shedule-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {

  constructor(private dataService: DataService) { }
  sheduleData;
  datesArray = [];
  currentDate: string;
  theDayAfterTomorrowDate: string;
  querySerach: string = "";
  filter: string = "";
 
  ngOnInit() {
    let date = new Date();
    this.currentDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    this.getDataFromServer(this.currentDate);
    this.getTheDayAfterTomorrowDate(date);
    this.dataService.query.subscribe(res => this.querySerach = res);
    this.dataService.filter.subscribe(res => this.filter = res);
  }

  getTheDayAfterTomorrowDate(date) {
    date.setDate(date.getDate() + 2);
    var currentDateArr = date.toDateString().split(" ");
    this.theDayAfterTomorrowDate = currentDateArr[0].toUpperCase() + ", " + currentDateArr[1].toUpperCase() + " " + currentDateArr[2];
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