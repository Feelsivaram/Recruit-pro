import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Recruitpro1Component } from './recruitpro1/recruitpro1.component';
import { Recruitpro3Component } from './recruitpro3/recruitpro3.component';
import { Recruitpro2Component } from './recruitpro2/recruitpro2.component';
import { LoginComponent } from './login/login.component';
import { AddopenrequirementsComponent } from './addopenrequirements/addopenrequirements.component';
import { SubmissiontrackerComponent } from './submissiontracker/submissiontracker.component';
import { ResumedatabaseComponent } from './resumedatabase/resumedatabase.component';
import { ReportgenerationComponent } from './reportgeneration/reportgeneration.component';
import { ScheduleinterviewComponent } from './scheduleinterview/scheduleinterview.component';
import { ProfileComponent } from './profile/profile.component';
import { BdmoenrequirementsComponent } from './bdmoenrequirements/bdmoenrequirements.component';
import { BrdopenrequirementsComponent } from './brdopenrequirements/brdopenrequirements.component';
import { BrdsubmissiontrackerComponent } from './brdsubmissiontracker/brdsubmissiontracker.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [{path:'login',component:LoginComponent},

{path:'main',component:MainComponent,children:[
  {path:"",redirectTo:"addopenrequirements",pathMatch:"full"},
  {path:'addopenrequirements',component:AddopenrequirementsComponent},
  {path:'submissiontracker',component:SubmissiontrackerComponent},

{path:'resumedatabase',component:ResumedatabaseComponent},

{path:'reportgeneration',component:ReportgenerationComponent},

{path:'scheduleinterview',component:ScheduleinterviewComponent}]},
{path:'profile',component:ProfileComponent},

{path:"",redirectTo:"login",pathMatch:"full"}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
