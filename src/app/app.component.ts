import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    FirestoreModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'VictorRamirez';
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => { 
      if (!(event instanceof NavigationEnd)) { 
          return; 
      } 
      window.scrollTo(0, 0) 
  }); 
  }

  isContact() {
    return this.router.url === '/contact';
  }

  isSuccess() {
    return this.router.url === '/contact/success'
  }
}
