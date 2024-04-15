import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { Firestore, addDoc, collection, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  firestore: Firestore = inject(Firestore);

  constructor(private router: Router) {}

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    organization: new FormControl(''),
    services: new FormControl(''),
    message: new FormControl('', Validators.required),
  });

  submitForm() {
    Object.keys(this.contactForm.controls).forEach((field) => {
      const control = this.contactForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });

    if (this.contactForm.valid) {
      addDoc(collection(this.firestore, 'responses'), this.contactForm.value)
        .then((responsesRef) => {
          collection(this.firestore, 'responses');
          setDoc(responsesRef, {
            ...this.contactForm.value,
            id: responsesRef.id,
          });
        })
        .finally(() => {
          emailjs.init(environment.emailjs);
          emailjs
            .send('default_service', 'template_oyf087l', {
              name: this.contactForm.value.name,
              reply_to: this.contactForm.value.email,
            })
            .then(
              (response) => {
                this.contactForm.reset();
                this.router.navigate(['/contact/success']);
              },
              (err) => {
                console.log(err);
              }
            );
        });
    }
  }
}
