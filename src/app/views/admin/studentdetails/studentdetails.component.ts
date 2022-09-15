import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  id=''
  messageErr=''
  dataObject:any
  constructor(private route:ActivatedRoute,private ds:DataService){
  this.route.params.subscribe(params=>this.id=params['id'])

  this.ds.getOneStudent(this.id).subscribe(response=>
    this.dataObject=response,(err:HttpErrorResponse)=>
    this.messageErr="student not exist")
  }
 
  ngOnInit(): void {
  }

}
