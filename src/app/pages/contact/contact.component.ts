import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]

    });
  }


  ngOnInit(): void {

  }

  hasErrors(field: string, typeError: string): boolean {
    const control = this.contactForm.get(field);
    return control ? control.hasError(typeError) && control.touched : false;
  }



  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }
}
