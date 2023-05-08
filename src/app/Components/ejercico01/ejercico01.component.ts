import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-ejercico01',
  templateUrl: './ejercico01.component.html',
  styleUrls: ['./ejercico01.component.scss'],
})
export class Ejercico01Component implements OnInit {
  formPerson: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadForm();
  }
  loadForm() {
    this.formPerson = new FormGroup({
      person: this.fb.array([
        new FormGroup({
          name: new FormControl('Juan', [
            Validators.required,
            Validators.maxLength(5),
          ]),
          lastname: new FormControl('Perez', [
            Validators.required,
            Validators.maxLength(6),
          ]),
        }),
      ]),
    });
  }
  getPerson(): FormArray {
    return this.formPerson.get('person') as FormArray;
  }
  showPerson(person) {
    console.log(person.value);
  }
  removePerson(i: number) {
    (this.formPerson.get('person') as FormArray).removeAt(i);
  }
  addPerson() {
    (this.formPerson.controls.person as FormArray).push(
      new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.maxLength(5),
        ]),
        lastname: new FormControl('', [
          Validators.required,
          Validators.maxLength(6),
        ]),
      })
    );
  }
  submit() {
    console.log((this.formPerson.get('person') as FormArray).value);
  }
  public errorMessage = {
    name: [
      { type: 'required', message: 'El nombre es un dato requerido' },
      { type: 'maxlength', message: 'Excedio el maximo de caracteres' },
    ],
    lastname: [
      { type: 'required', message: 'El apellido es un dato requerido' },
      { type: 'maxlength', message: 'Excedio el maximo de caracteres' },
    ],
  };
}
