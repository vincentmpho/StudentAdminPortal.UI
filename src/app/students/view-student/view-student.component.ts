import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Student } from '../../Models/Ui-models/student.model';

@Component({
  selector: 'app-view-student',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,        // ← Provides matInput
    MatDatepickerModule,   // ← Provides datepicker components
    MatNativeDateModule,   // ← Required for datepicker
    MatIconModule,
    MatButtonModule,
    RouterLink,
    FormsModule            // ← Required for ngModel
  ],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit {
  studentId: string | null | undefined;
  student : Student = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: 0,
    gengerId: '',
    profileImageUrl: '',
    gender: {
      id: '',
      description: ''
    },
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: ''
    }

  }

  constructor(
    private readonly studentService: StudentService, 
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studentId = params.get('id');

      if (this.studentId) {
        this.studentService.getStudent(this.studentId).subscribe(
          (successResponse) => {
            this.student=successResponse;
          }
        );
      }
    });
  }
}
