import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export interface UsersData {
  name: string;
  position: number;
  age: number;
  title: string;
  activity: string;
}
@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  user_data: any;
  updateForm: FormGroup;
  submitted = false;

  constructor(public dialogRef: MatDialogRef<UpdateUsersComponent>, private formBuilder: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
      console.log(data);
    this.user_data = { ...data };
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      title: ['', Validators.required],
      activity: ['', Validators.required],
       name: ['', Validators.required],
       age: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
    }, {

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.updateForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.updateForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.updateForm.reset();
  }
  update(index){
    this.data [3].push(this.updateForm.value );
    console.log(this.updateForm.value);
    console.log(this.data,"hhh");
  }
}
