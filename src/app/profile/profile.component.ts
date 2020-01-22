import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SService } from '../s.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
a:string;
profile:string;
  constructor(  private router:Router, private ds: SService) { }

  ngOnInit() {
    this.profile=this.ds.receivingdata()
    this.profile=this.ds.receivingdata()
    
  }

  gettingdata(a){
    this.a=a;

  }

}
