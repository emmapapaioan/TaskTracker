import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes, faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // Input property that receives a single Task object from the parent component
  @Input() task!: Task;

  // Output properties that emit events when a task is deleted or when its reminder is toggled
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleCompleted: EventEmitter<Task> = new EventEmitter();
  
  // font-awesome icon for the close button
  faTimes = faTimes;
  faCheckSquare = faCheckSquare;
  faSquare = faSquare;

  constructor() { }

  ngOnInit(): void { }

  // Event handler for the delete button
  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  // Event handler for the reminder toggle button
  onToggle(task: Task) {
    if(this.task.completed==true){
      alert("You can't set on reminder for a completed task.");
      return;
    }
    this.onToggleReminder.emit(task);
  }

  onToggleComplete(task: Task) {
    //task.completed = !task.completed;
    this.onToggleCompleted.emit(task);
  }

  // Computed property that returns the title for the reminder toggle button based on the reminder state of the task
  get title() {
    return this.task.reminder ? 'Click to set off the reminder' : 'Click to set on the reminder';
  }
}
