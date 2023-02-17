import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // Input properties for the button text and color
  @Input() text!: string;
  @Input() color!: string; 

  // Output event emitter for button click
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // Function to handle button click event
  onClick(){
    this.btnClick.emit();
  }

  // Host listener functions for mouse hover events
  onMouseOver(hoverName: HTMLElement) {
    hoverName.style.backgroundColor = "red";
  }

  onMouseOut(hoverName: HTMLElement) {
    hoverName.style.backgroundColor = "green";
  }

}
