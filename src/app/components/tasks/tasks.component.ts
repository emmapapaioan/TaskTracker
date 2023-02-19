import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Get all the tasks from the taskService when the component is initialized
    this.taskService.getTasks().subscribe((tasks) => (this.
      tasks = tasks));
  }

  // Delete a task by calling the taskService to delete it from the server
  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t)=>t.id !== task.id))
      );
  }

  // Toggle a task's reminder status and call the taskService to update it on the server
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTaskCompleted(task).subscribe();
  }
  
  // Add a new task to the list and call the taskService to add it to the server
  addTask(task :Task) {
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
  }

}
