import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
onDelete(idx: number) {
this.taskArray.splice(idx,1);
}
  taskArray = [{taskName:'Brush teeth', isCompleted: false }];

  constructor(){}
ngOnInit(): void {
  
}
onSubmit(form: NgForm) {
    console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: true
    })
}

}
