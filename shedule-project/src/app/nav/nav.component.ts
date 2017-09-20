import { Component, ContentChildren, QueryList, AfterContentInit, OnInit, Output, EventEmitter  } from "@angular/core";
import { NavItemComponent } from "app/nav-item/nav-item.component";

@Component({
  selector: "nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements AfterContentInit, OnInit {

  constructor() { }

  @ContentChildren(NavItemComponent) items: QueryList<NavItemComponent>;
  datesArray = [];
  sheduleData;
  @Output() onDate = new EventEmitter<any>();

  ngOnInit() {
    this.getDatesArray(new Date());
  }

  ngAfterContentInit() {
    // get all active items
    let activeItems = this.items.filter((item)=>item.active);
    
    // if there is no active item set, activate the first
    if(activeItems.length === 0) {
      this.selectItem(this.items.first);
    }
    
  }

  getDatesArray(date) {
    
    for (var i = 0; i <= 2; i++) {
      
      if (i) {
        date.setDate(date.getDate() + 1);
      }

      this.datesArray.push(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
    }

  }

  selectItem(item: NavItemComponent){
    // deactivate all tabs
    this.items.toArray().forEach(item => item.active = false);
    
    // activate the tab the user has clicked on.
    item.active = true;
  }

  passDate(date) {
    this.onDate.emit(date);
  }

}
