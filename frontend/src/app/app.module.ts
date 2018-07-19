import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { TaskComponent } from './task/task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { EmployeesTasksListComponent } from './employees-tasks-list/employees-tasks-list.component';
import { EmployeeService } from './services/employee.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';
import { ErrorInterceptor } from './error.interceptor';


const appRoutes: Routes = [
  { path: '', component: EmployeesListComponent }, 
  { path: 'add', component: AddEmployeeComponent },
  { path: 'update/:id',component: UpdateEmployeeComponent},
  { path: 'task/all',component: TasksListComponent},
  { path: 'task/add/:id',component: AddTaskComponent},
  { path: 'task/update/:id',component: UpdateTaskComponent},
  { path: 'employeestasks/:id',component: EmployeesTasksListComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    TaskComponent,
    TasksListComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    EmployeesTasksListComponent,
    RegistrationComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule      
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true  },

    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

