import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(sheduleData: any[], name: string): Array<any> {
    if (sheduleData == null) {
      return null;
    }

    return name 
    ? sheduleData.filter(item => item.instructor_name.toLowerCase().indexOf(name.toLowerCase()) !== -1 || item.class_type_name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
    : sheduleData;
  }

}