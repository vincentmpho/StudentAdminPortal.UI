import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  standalone: true,
  imports: [],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent  implements OnInit{

//assign to  a local variable
studentId : string | null | undefined;

constructor(private readonly studentService: StudentService, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
this.route.paramMap.subscribe(
  (params)=>{
   this.studentId =params.get('id');

   //check
   if(this.studentId){
    this.studentService.getStudent(this.studentId)
    .subscribe(
     (successResponse)=>{
        console.log(successResponse);
     }
    );
   }
  }
);
  }
}
