import { Component, OnInit } from '@angular/core';
import { SService } from './s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // stds:object[]=[];
  // oldobj:object;
  constructor(){}
  ngOnInit(){
  //   this.s.readall().subscribe(res=>{
  //     this.stds=res["msg"];
  //  })
  }
 
//   regstudent(obj){
//     console.log(obj);
//     this.s.createstudent(obj).subscribe(res=>{alert(res["msg"]);
//     this.ngOnInit();
//   });
    
//   }
//   toreadit(i){
//     this.oldobj=this.stds[i];
//   }
//   edit(a,e){
//     console.log(e);
    
//    this.s.editit(a,e).subscribe(res=>{alert(res["msg"]);
//    this.ngOnInit();
//  })
//  }


//   delete(i){
//    var e=this.stds[i];
//     this.s.deleteit(e).subscribe(res=>{alert(res["msg"]);
//     this.ngOnInit();})
//   }
// }
}
