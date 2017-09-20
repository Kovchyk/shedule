import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  query = new Subject<any>();
  filter = new Subject<any>();

  getData(data: string) {
    return this.http.get("https://stage-vxl.eastbankclub.com/olb-api/?meth=get-site-data&type=schedule&date=" + data).map(res => res.json());
  }
}