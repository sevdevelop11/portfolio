import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {

}
