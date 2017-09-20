import { Component, Input } from "@angular/core";

@Component({
  selector: "nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.css"]
})
export class NavItemComponent {

  constructor() { }

  @Input("itemTitle") title: string;
  @Input() active = false;

}
