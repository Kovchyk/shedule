import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private dataService: DataService) { }
  query: string;

  ngOnInit() {

  }

  setQuery() {
    this.dataService.query.next(this.query);
  }
}
