import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';

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
  },

  { path: 'Students/:id',
     component: ViewStudentComponent }


];
