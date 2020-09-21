import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface UsersData {
  name: string;
  position: number;
  age: number;
  title: string;
  activity: string;
}
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  user_data: any;
  constructor(public dialogRef: MatDialogRef<ViewUsersComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
      console.log(data);
    this.user_data = { ...data };
  }

  ngOnInit(): void {
  }

}
