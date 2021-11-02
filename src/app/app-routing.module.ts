import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './pages/archive/archive.component';
import { CreatetaskComponent } from './pages/createtask/createtask.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MypocketComponent } from './pages/mypocket/mypocket.component';
import { ReminderComponent } from './pages/reminder/reminder.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { UseraccountComponent } from './pages/useraccount/useraccount.component';

const routes: Routes = [
  { path: '', component: SigninComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'reminders', component: ReminderComponent},
  { path: 'mypocket', component: MypocketComponent},
  { path: 'archive', component: ArchiveComponent},
  { path: 'useraccount', component: UseraccountComponent},
  { path: 'taskview', component: TaskviewComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'createtask', component: CreatetaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
