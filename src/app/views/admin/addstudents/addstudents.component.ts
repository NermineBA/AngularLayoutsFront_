import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
  messageErr=''
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }
  
  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.addstudent(data).subscribe(response=>{
    //console.log(response)
    this.route.navigate(['/admin/allstudents'])
    },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    //console.log(err.error)
    //console.log(err.status)
    })
  }
}
