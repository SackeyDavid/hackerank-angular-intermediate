import {Component, OnInit} from '@angular/core';
import {Survey} from "../types/Survey";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];
  filteredList: Survey[];

  status = 'status';
  category = "category";

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    }
  ]

  ngOnInit() {

  }

  onFilterSelected(filter: string, type: string) {
    this.filteredList = [];
    if (filter == 'All') {
      this.filteredList = this.surveyList;
      return;
    } 
    else {
      if (type === 'status') {
        let items = this.surveyList.filter( function(item) {
          return (item.status.toLowerCase() == filter.toLowerCase());
        }); 

        items.forEach( (item) => {
          this.filteredList.push(item)
        });

      } 
      else {
        let items = this.surveyList.filter( function(item) {
        return (item.category.toLowerCase() == filter.toLowerCase());
        }); 

        items.forEach( (item) => {
          this.filteredList.push(item)
        });

      }
    }

  }


}
