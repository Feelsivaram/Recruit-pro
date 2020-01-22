import { Component, OnInit } from '@angular/core';
import { SService } from '../s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router,private ds:SService) { }
  ceo:boolean;
  brd:boolean;
  bdm:boolean;
 profile:string;

 logout(){
  this.router.navigate(['/login'])
}

 
  ngOnInit() {
    this.profile=this.ds.receivingdata();
    if (this.ds.receivingdata()=="ceo")
    {this.ceo=true;
    this.brd=false;
  this.bdm=false;}
  else  if (this.ds.receivingdata()=="brd"){this.ceo=false;
   this.brd=false;
  this.bdm=true;}
  else  if (this.ds.receivingdata()=="bdm"){this.ceo=false;
    this.brd=true;
 this.bdm=false;}
  }



}

