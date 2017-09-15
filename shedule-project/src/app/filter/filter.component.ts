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
  query: string;
  data: any;

  ngOnInit() {
    this.dataService.getData("9/16/2017").subscribe(res => {
      this.data = res.area_filters;
    });
  }

  setQuery() {
    this.dataService.query.next(this.query);
  }
}