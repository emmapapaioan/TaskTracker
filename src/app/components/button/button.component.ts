import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string; 
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();
  }

  onMouseOver(hoverName: HTMLElement) {
    hoverName.style.backgroundColor = "red";
  }

  onMouseOut(hoverName: HTMLElement) {
    hoverName.style.backgroundColor = "green";
  }
  
  

}
