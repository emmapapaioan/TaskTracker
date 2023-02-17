import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // Private member variable to keep track of whether the 'Add Task' button is shown or hidden
  private showAddTask: boolean = false;

  // Private subject to communicate changes to the 'showAddTask' variable
  private subject = new Subject<any>(); 
  
  constructor() { }

  // Function to toggle the value of 'showAddTask' and emit the new value through the subject
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // Function to subscribe to the changes in 'showAddTask' through the subject
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
