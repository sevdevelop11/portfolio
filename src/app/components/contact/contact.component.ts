import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      organization: new FormControl(''),
      services: new FormControl(''),
      message: new FormControl('')
  });
  
  submitForm() {
    console.log("SUBMIT")
  }
}
