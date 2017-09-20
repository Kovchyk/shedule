import { Component, OnInit } from "@angular/core";
import { NgModel} from "@angular/forms";
import { DataService } from "../services/data.service";

@Component({
  selector: "filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {

  constructor(private dataService: DataService) { }
  query: string = "";
  filter: string = "";
  data: any;
  
  ngOnInit() {
    let date = new Date();
    let currentDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

    this.dataService.getData(currentDate).subscribe(res => {
      this.data = res.area_filters;
    });
  }

  setQuery() {
    this.dataService.query.next(this.query);
  }
  setFilter() {

    if (this.filter === "All") {
      this.filter = "";
    }

    this.dataService.filter.next(this.filter);
  }
}