import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',    //is used in the main app component
  templateUrl: './header.component.html',  //brings in header.component.html
  styleUrls: ['./header.component.css']    //bring in header.component.css
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';  // used in header.component.html for title

  constructor() { }

  ngOnInit(): void {
  }

}
