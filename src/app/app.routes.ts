import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '*', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'work', component: WorkComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},


];