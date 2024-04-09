import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RecentWorksComponent } from '../shared/recent-works/recent-works.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RecentWorksComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
