import { Component, inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../Models/Ui-models/student.model';
import { MatTableDataSource } from '@angular/material/table'; 
import { MatTableModule } from '@angular/material/table';  
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatPaginatorModule, MatSortModule], 
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit, AfterViewInit {

  students: Student[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateofBith', 'email', 'phone', 'gender'];

    // Create a prop for the paginator
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort; 

  // Define the data source
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

// inject the service without needing a constructor
  private studentService = inject(StudentService);

  ngOnInit(): void {
    // Fetch Students
    this.studentService.getStudent().subscribe(
      (successResponse) => {
        this.students = successResponse;
        this.dataSource.data = this.students; 

        setTimeout(() => {
          this.dataSource.paginator = this.matPaginator;
          this.dataSource.sort = this.matSort;
        });
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
  }
}
