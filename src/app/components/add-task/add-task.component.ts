import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  date!: string;
  time!: string;
  reminder: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if(!this.text) {
      alert('Please add a task.');
      return;
    }

    const newTask = {
      text: this.text,
      date: this.date,
      time: this.time,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.date = '';
    this.time = '';
    this.reminder = false;

  }
}
