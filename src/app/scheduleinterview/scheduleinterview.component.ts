import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SService } from '../s.service';

@Component({
  selector: 'app-scheduleinterview',
  templateUrl: './scheduleinterview.component.html',
  styleUrls: ['./scheduleinterview.component.css']
})
export class ScheduleinterviewComponent implements OnInit {

  constructor(private router:Router,private ds:SService) { }
  onSubmit(obj){
    // if (res.updateStatus == '0') {
       //  this.router.navigate(['userProfile']);
      // } else {
      //   if (res.userType === 'ceo') {
      //     this.router.navigate(['ceoPage']);
      //   }
      //   else if (res.userType === 'bdm') {
      //     this.router.navigate(['bdmPage']);
      //   }
      //   else {
      //     this.router.navigate(['brdPage']);
      //   }
      // })
    this.ds.schedulePost(obj)

  }

  ngOnInit() {
  }

}
