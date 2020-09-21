import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
export interface UsersData {
  name: string;
  position: number;
  age: number;
  title: string;
  activity: string;
}

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public usersForm: FormGroup;
  UsersData: any;
  constructor(public dialog: MatDialog, private _fb: FormBuilder,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddUsersComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) { }
  ngOnInit() {
    this.registerForm = this.getFormUser()
    console.log(this.registerForm, "formmm");
    this.usersForm = this._fb.group({
       Activite: this._fb.array([this.initRows()])
    });
  }
  get formArr() {
    return this.usersForm.get(" Activite") as FormArray;
  }
  initRows() {
    return this._fb.group({
      name: [""]
    });
  }
  addNewRow() {
    let formArray = this.registerForm.get('activite') as FormArray
    formArray.push(this.initRows());
  }
  deleteRow(index: number) {
    let formArray = this.registerForm.get('activite') as FormArray
    formArray.removeAt(index);
  }
  getFormUser() {
    return this.formBuilder.group({
      title: ['', Validators.required],
       name: ['', Validators.required],
      Age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      activite: this.formBuilder.array([this.initRows()])
    });
  }
  // convenience getter for easy access to form fields
  get retreiveFrorm() { return this.registerForm.controls; }
  onSubmit() {
    for (let i = 0; i < this.usersForm.value. Activite.length; i++) {
      this.submitted = true;
      this.UsersData.push(this.usersForm.value)
      console.log(this.registerForm.value, this.usersForm.value. Activite[i]);
      // stop here if form is invalid
      // if (this.registerForm.invalid || this.usersForm.value. Activite[i].name == "") {
      //   return;
      // }
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 5));
    }
  }
  removeAll() {
    let formArray = this.registerForm.get('activite') as FormArray
    for (let index = 0; index < formArray.controls.length; index++) {
      const element = formArray.controls[index];
      formArray.removeAt(index);
    }
    formArray.push(this.initRows());
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.usersForm.reset();
  }
}
