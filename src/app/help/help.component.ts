import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SService } from '../s.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// str:string;
// submit(obj){
//   if(obj.username=="ceo"){
//     this.router.navigate(['recruitpro1']);
//   }
//   else if(obj.username=="bdm"){
//    this.router.navigate(['recruitpro2']);
//   }
//   else if(obj.username=="brd"){
//    this.router.navigate(['recruitpro3']);
//   }
//   else{
//    this.str= "invalid details";
//   }

//  this.ds.ceologin(obj).subscribe(res=>{
   
//    if(res['message']=="login"){
//      this.router.navigate(['recruitpro1']);
//    }
//    else if(res['message']=="recruit"){
//     this.router.navigate(['recruitpro2']);
//    }
//    else if(res['message']=="recruit1"){
//     this.router.navigate(['recruitpro3']);
//    }
//    else{
//     this.str= "invalid details";
//    }
//  })
  
// }


















// submit(obj){
//  if(obj.username=="admin" && obj.password=="admin"){
//    //navigate to admin componenet
//    this.router.navigate(['/admin'])
//  }
//  else {
//    //navigate to student component
//   this.ds.studentlogin(obj).subscribe(res=>{
//     if(res["msg"]=="loggedin successfully") {
//        //navigate to student component
//        this.router.navigate(['/student'])
//       }
//        else{
//     alert(res["msg"])
//        }
//   })
//  }
// }


}