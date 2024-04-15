import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent, RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Input() isContact: boolean = false;
  @Input() isSuccess: boolean = false;

  constructor(private router: Router){}

  getRouter() {
    return this.router;
  }
}
