import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReminderComponent } from './reminder/reminder.component';
import { MypocketComponent } from './mypocket/mypocket.component';
import { ArchiveComponent } from './archive/archive.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { RouterModule } from '@angular/router';
import { TaskviewaltComponent } from './taskviewalt/taskviewalt.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TasksComponent,
    ReminderComponent,
    MypocketComponent,
    ArchiveComponent,
    UseraccountComponent,
    TaskviewComponent,
    SigninComponent,
    SignupComponent,
    CreatetaskComponent,
    TaskviewaltComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
    TasksComponent,
    ReminderComponent,
    MypocketComponent,
    ArchiveComponent,
    UseraccountComponent,
    TaskviewComponent,
    SigninComponent,
    SignupComponent,
    CreatetaskComponent
  ]
})
export class PagesModule { }
