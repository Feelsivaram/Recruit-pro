import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SService } from '../s.service';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ds: SService) { }




  // submit(obj){
  //   this.ds.login(obj).subscribe(res=>{
  //     if(res.message=="invalid creadentials"){
  //       alert("please try to login by using another username")
  //     }
  //     else if(res.message=="empployee is on hold")
  //     {
  //       alert("please contact site admin as you are on hold thank you ")
  //     }
  //     else if(res.message=="succesfully logged in"){
  //       this.router.navigate(['/'])
  //     }
  //   })
  //  }






  // login(obj){
  //   if{
  //     (obj.emaid=="ceo")
  //     this.router.navigate(['/addopenrequirements']),
  //   }
  //   else  (obj.emailid == "bdm") {
  //       this.router.navigate(['recruitpro2']);
  //      }
  //      else  (obj.emailid == "brd") {
  //        this.router.navigate(['recruitpro3']);
  //     }
  //  }
  ngOnInit() {
  }
  // str: string;
  // submit(obj) {
  // console.log(obj);
  // if(obj.emailid:"admin@gmail.com")
  // obj = { email: 'dhfchghb@hgjh.com', password: 'asdfghj' };
  // if (obj.emailid == "admin@gmail.com") {

  //   this.router.navigate(['recruitpro1']);
  // }
  // else{
  // if (obj.emailid == "bdm") {
  //   this.router.navigate(['recruitpro2']);
  // }
  // else if (obj.emailid == "brd") {
  //   this.router.navigate(['recruitpro3']);
  // }
  // else {
  //   this.str = "invalid details";
  // }

  //     this.ds.ceologin(obj).subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       error => {
  //         console.log(error)
  //       }
  //     )
  //   }
  // }
  login1(obj) {
    this.ds.givingdata(obj.emailid)
    if (obj.emailid == 'ceo') {
      this.router.navigate(['/main'])
    }
    else if (obj.emailid == 'bdm') {
      this.router.navigate(['/main'])
    }
    else if (obj.emailid == 'brd') {
      this.router.navigate(['/main'])
    }
  }
  // if (res.updateStatus == '0') {
  //   this.router.navigate(['userProfile']);
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

  //   if (res['message'] == "login") {
  //     this.router.navigate(['recruitpro1']);
  //   }
  //   else if (res['message'] == "recruit") {
  //     this.router.navigate(['recruitpro2']);
  //   }
  //   else if (res['message'] == "recruit1") {
  //     this.router.navigate(['recruitpro3']);
  //   }
  //   else {
  //     this.str = "invalid details";
  //   }

}











