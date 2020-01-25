import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SService {
  url = 'http://192.168.1.39:8080'
  // headers={token:}

  constructor(private hc:HttpClient) { }
a:string;
//from login
 login(obj){
   return this.hc.post(this.url+'/login/',obj);
 }
//for navigating to respective person
givingdata(a){
this.a=a;
}
receivingdata(){
  return this.a;
}
 //from table
 openRequirements(obj,condition):Observable<object>{
  // return this.hc.post<object>(this.url+`/addopenrequirements/${condition}`,obj);
  return this.hc.post<object>('http://localhost:4544/main/addopenrequirements/',obj);

 }

//  //get request from table
//  GettingData(): Observable<object> {
//    return this.hc.get<object>('http://localhost:4544/addopenrequirements/')
//  }

 //post request from schedule interview
 schedulePost(obj):Observable<object>{
   return this.hc.post<object>('http://localhost:4544/main/scheduleinterview/',obj)
 }

 //post request from submission tracker
 submissionPost(obj):Observable<object>{
   return this.hc.post<object>('http://localhost:4544/main/submissiontracker/',obj)
 }

//post request from Profile Page
postProfiledetails(obj){
  return this.hc.post<object>('http://localhost:4544/main/profile/',obj)
}




















  //to register
//   createstudent(obj):Observable<object>{
//     return this.hc.post<object>('/student/create',obj)
//   }
//   //readall
// readall():Observable<object>{
//   return this.hc.get<object>(`/allstudents`);
// }

//getit
// getit(e):Observable<object>{
//   return this.hc.get<object>(`/read/${e.name}`);
// }
// //editit
// editit(obj,e):Observable<object>{
//   console.log(e);
//   return this.hc.post<object>(`/edit/${e}`,obj)
// }

// //deleteit
// deleteit(e):Observable<object>{
//   return this.hc.delete<object>(`/delete/${e.name}`);
// }
// }
}
