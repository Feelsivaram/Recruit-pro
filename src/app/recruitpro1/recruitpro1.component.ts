import { Component, OnInit } from '@angular/core';
import { AddopenrequirementsComponent } from '../addopenrequirements/addopenrequirements.component';
import { SubmissiontrackerComponent } from '../submissiontracker/submissiontracker.component';
import { ResumedatabaseComponent } from '../resumedatabase/resumedatabase.component';
import { Router } from '@angular/router';
import { ReportgenerationComponent } from '../reportgeneration/reportgeneration.component';

@Component({
  selector: 'app-recruitpro1',
  templateUrl: './recruitpro1.component.html',
  styleUrls: ['./recruitpro1.component.css']
})
export class Recruitpro1Component implements OnInit {

  pages=[];
  constructor( private router: Router ) {
    this.pages = [
      { title: "Add Open Requirements", routerLink: "/addopenrequirements", componentName: AddopenrequirementsComponent  },
      { title: "Submission Tracker", routerLink: "/submissiontracker", componentName: SubmissiontrackerComponent },
      { title: "Resume Database", routerLink: "/resumedatabase", componentName: ResumedatabaseComponent  },
      {title:"Report Generation",routerLink:"/reportgeneration",componentName:ReportgenerationComponent}
    ];
   }

  ngOnInit() {
    
  }

}
