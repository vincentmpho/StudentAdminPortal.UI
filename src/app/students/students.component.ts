import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../Models/Ui-models/student.model';
import { MatTableDataSource } from '@angular/material/table'; 
import { MatTableModule } from '@angular/material/table';  
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MatTableModule,CommonModule ],
   templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateofBith', 'email', 'phone', 'gender'];

  // Define the data source
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

 // inject the service without needing a constructor
  private studentService = inject(StudentService);

  ngOnInit(): void {
    // Fetch Students
    this.studentService.getStudent().subscribe(
      (successResponse) => {
        this.students = successResponse;
        this.dataSource = new MatTableDataSource<Student>(this.students);  
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
