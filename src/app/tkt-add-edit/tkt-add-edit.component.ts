import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../service/ticket.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-tkt-add-edit',
  templateUrl: './tkt-add-edit.component.html',
  styleUrls: ['./tkt-add-edit.component.scss'],
})
export class TktAddEditComponent implements OnInit {
  ticketForm: FormGroup;

  agents: string[] = [
    'Bhavesh',
    'Rohit',
    'Virat',
    'Dhoni',
    'Bumrah',
    'Shikhar',
    'Kuldeep',
  ];

  tickets: string[] = ['Any', 'Escalation', 'Billing', 'Customer Support'];

  priority: string[] = ['Low', 'Medium', 'High', 'Urgent'];

  status: string[] = [
    'Open',
    'Pending',
    'Resolved',
    'Closed',
    'Waiting On Customer',
    'Waiting On Third Party',
  ];

  constructor(
    private _fb: FormBuilder,
    private _tktservice: TicketService,
    private _dialogRef: MatDialogRef<TktAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.ticketForm = this._fb.group({
      email: [''],
      description: [''],
      ticketGroup: [''],
      toAssign: [''],
      ticketStatus: [''],
      ticketPriority: [''],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.ticketForm.patchValue(this.data);
    }
  }


  onFormSubmit() {
    if (this.ticketForm.valid) {
      if (this.data) {
        this._tktservice
          .updateTicket(this.data.id, this.ticketForm.value)
          .subscribe({
            next: (val: any) => {
              // alert('Ticket updated!');
              this._coreService.openSnackBar('Ticket updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      } else {
        this._tktservice.addTicket(this.ticketForm.value).subscribe({
          next: (val: any) => {
            // alert('Ticket added successfully');
            this._coreService.openSnackBar('Ticket added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }
}
