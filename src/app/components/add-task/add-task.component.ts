import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  // Event emitter to output new task
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // Properties for the new task form
  text!: string;
  date!: string;
  time!: string;
  reminder: boolean = false;

  // Properties for the UI service
  showAddTask?: boolean;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    // Subscribe to UI service to toggle the "Add Task" form visibility
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) =>
    (this.showAddTask = value))
  }

  ngOnInit(): void { }

  // Function to handle the form submission
  onSubmit() {
    if(!this.text) {
      // If the user tries to submit an empty task, show an alert and return
      alert('Please add a task.');
      return;
    }

    // Create a new task object with the form input values
    const newTask = {
      text: this.text,
      date: this.date,
      time: this.time,
      reminder: this.reminder
    }

    // Emit the new task object to the parent component
    this.onAddTask.emit(newTask);

    // Reset the form input values
    this.text = '';
    this.date = '';
    this.time = '';
    this.reminder = false;

  }
}
