import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Title for the header
  title: string = 'Task Tracker';

  // Boolean value to show or hide the Add Task form
  showAddTask?: boolean = false;

  // Subscription object to keep track of changes in the UI service
  subscription?: Subscription;

  constructor(private uiService: UiService, private router: Router) { 
    // Subscribe to the onToggle event in the UI service
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => 
        (this.showAddTask=value));
  }

  ngOnInit(): void {}

  // Function to toggle the visibility of the Add Task form
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  // Function to check if the current route matches a given route
  hasRoute(route: string) {
    return this.router.url === route;
  }

}
