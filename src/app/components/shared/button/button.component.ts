import { ChangeDetectorRef, Component, ElementRef, Input, NgModule, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() idElement: string = new Input();
  @Input() element: string = new Input();
  @Input() size!: string;

  isMenu: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.isMenu = this.element === "menu";
    let button = document.getElementById(this.idElement);
    button ? button.style.height = `${this.size}px` : '';
    button ? button.style.width = `${this.size}px` : '';
    console.log(button);
    this.cdr.detectChanges();
  }
}