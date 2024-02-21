import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-my-art',
  template: '<p>My Art Component</p>',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatCardModule,
      MatDialogModule,
      ],

  templateUrl: './my-art.component.html',
  styleUrl: './my-art.component.css'
})
export class MyArtComponent {constructor(public dialog: MatDialog) {}

openDialog() {
  const dialogRef = this.dialog.open(DialogContentExampleDialog);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

openDialog2() {
  const dialogRef = this.dialog.open(DialogContentExampleDialog2);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}

@Component({
  selector: 'dialog-content-example1',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog1',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {}


////////////////////////////////////////////////////////

@Component({
  selector: 'dialog-content-example2',
  templateUrl: 'dialog2.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogContentExample2 {
  constructor(public dialog: MatDialog) {}

  openDialog2() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog2);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog2',
  templateUrl: 'dialog2.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog2 {}
