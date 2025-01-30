import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [

  {
    //Default route, Home
    path: '',  
    component: StudentsComponent 
  },
  
  {
    //This route wil be used for the students page
    path: 'students', 
    component: StudentsComponent
  }
];
