import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormControl} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HelpComponent } from './help/help.component';
import { Recruitpro1Component } from './recruitpro1/recruitpro1.component';
import { Recruitpro2Component } from './recruitpro2/recruitpro2.component';
import { Recruitpro3Component } from './recruitpro3/recruitpro3.component';
import { LoginComponent } from './login/login.component';
import { AddopenrequirementsComponent } from './addopenrequirements/addopenrequirements.component';
import { SubmissiontrackerComponent } from './submissiontracker/submissiontracker.component';
import { ResumedatabaseComponent } from './resumedatabase/resumedatabase.component';
import { ReportgenerationComponent } from './reportgeneration/reportgeneration.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import { FaqsComponent } from './faqs/faqs.component';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule, MatButtonModule} from '@angular/material';
// import {MatButtonModule} from '@angular/material';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule, MatDialog, MatDialogContent} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ScheduleinterviewComponent } from './scheduleinterview/scheduleinterview.component';
import { OpenrequirementsComponent } from './openrequirements/openrequirements.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { BdmoenrequirementsComponent } from './bdmoenrequirements/bdmoenrequirements.component';
import { BrdopenrequirementsComponent } from './brdopenrequirements/brdopenrequirements.component';
import { SubmissiontracerComponent } from './submissiontracer/submissiontracer.component';
import { BrdsubmissiontrackerComponent } from './brdsubmissiontracker/brdsubmissiontracker.component';
import { MainComponent } from './main/main.component';
import { UploadresumeComponent } from './uploadresume/uploadresume.component'


@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    Recruitpro1Component,
    Recruitpro2Component,
    Recruitpro3Component,
    LoginComponent,
    AddopenrequirementsComponent,
    SubmissiontrackerComponent,
    ResumedatabaseComponent,
    ReportgenerationComponent,
    FaqsComponent,
    ScheduleinterviewComponent,
    OpenrequirementsComponent,
    ProfileComponent,
    BdmoenrequirementsComponent,
    BrdopenrequirementsComponent,
    SubmissiontracerComponent,
    BrdsubmissiontrackerComponent,
    MainComponent,
    UploadresumeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[OpenrequirementsComponent,SubmissiontracerComponent,UploadresumeComponent]
})
export class AppModule { }
