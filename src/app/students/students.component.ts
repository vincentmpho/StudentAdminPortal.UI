import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {




  // inject the service without needing a constructor
  private studentService = inject(StudentService);  
  
  ngOnInit(): void {
    //Ftch Students
    this.studentService.getStudent().subscribe (
      (successResponse)=>{
        console.log(successResponse);
        console.log(successResponse);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }
}
