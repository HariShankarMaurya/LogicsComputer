import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  myArray = ["value1", 2, 3, "insert fourth value here"];
  ourServices=[
    {'id':1,name:'Online Services',iconClass:'ri-store-line'},
    {'id':2,name:'Website Designing',iconClass:'icon-box'},
    {'id':3,name:'PanCard Updates',iconClass:'ri-calendar-todo-line'},
    {'id':4,name:'LIC Premium',iconClass:'ri-paint-brush-line'},
    {'id':5,name:'Driving Licence',iconClass:'ri-gradienter-line'},
    {'id':6,name:'Ticket Booking',iconClass:'ri-file-list-3-line'},
    {'id':7,name:'Payment Transfer',iconClass:'ri-price-tag-2-line'},
    {'id':8,name:'Air Ticket Booking',iconClass:'ri-anchor-line'},
    {'id':9,name:'Exam Scheduling',iconClass:'ri-disc-line'},
    {'id':10,name:'Payment Transfer',iconClass:'ri-price-tag-2-line'},
    {'id':11,name:'Adhar Updates',iconClass:'ri-price-tag-2-line'},
    {'id':12,name:'Payment Transfer',iconClass:'ri-fingerprint-line'},
    {'id':13,name:'DU Admission',iconClass:'ri-base-station-line'}
    
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
