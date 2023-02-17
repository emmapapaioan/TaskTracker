import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 

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
  
  // font-awesome icon for the close button
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void { }

  // Event handler for the delete button
  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  // Event handler for the reminder toggle button
  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }

  // Computed property that returns the title for the reminder toggle button based on the reminder state of the task
  get title() {
    return this.task.reminder ? 'Double click to set off the reminder' : 'Double click to set on the reminder';
  }
}
