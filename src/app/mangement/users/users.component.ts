import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddUsersComponent } from '../add-users/add-users.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ViewUsersComponent } from '../view-users/view-users.component';
import { UpdateUsersComponent } from '../update-users/update-users.component'
import { RouterTestingModule } from '@angular/router/testing';
export interface UsersData {
  name: string;
  position: number;
  age: number;
  title: string;
  activity: string;
}
const ELEMENT_DATA: UsersData[] = [
  { position: 1, name: 'Alain', age: 27, title: 'Mr', activity: 'FrontEnd' },
  { position: 2, name: 'Sophie', age: 42, title: 'Miss', activity: 'BackEnd' },
  { position: 3, name: 'Julie', age: 29, title: 'Miss', activity: 'Designer' },
  { position: 4, name: 'Antoine', age: 33, title: 'Mr', activity: 'FrontEnd' },
  { position: 5, name: 'Bruno', age: 26, title: 'Mr', activity: 'FullStack' },
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('closebutton', { static: true }) closebutton;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'name', ' age', 'title', 'activity', 'action'];
  dataSource: MatTableDataSource<UsersData>;
  constructor(public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddUsersComponent, {
      width: '750px',
    }); }
  openDialogView(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ViewUsersComponent, {
      width: '750px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogUpdate(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(UpdateUsersComponent, {
      width: '750px',
      data: obj,
     
    });  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA.slice());
    this.dataSource.paginator = this.paginator;
  }
  removeAll() {
    this.dataSource.data = [];
  }
  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
    this.dataSource.data = data;
  }
  reset() {
    this.dataSource.data = ELEMENT_DATA.slice();
    this.table.renderRows();
  }
}
