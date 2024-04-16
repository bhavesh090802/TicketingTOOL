import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TicketService } from '../service/ticket.service';
import { CoreService } from '../core/core.service';
import { TktAddEditComponent } from '../tkt-add-edit/tkt-add-edit.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  displayedColumns: string[] = [
    'id',
    'email',
    'description',
    'ticketGroup',
    'toAssign',
    'ticketStatus',
    'ticketPriority',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _tktService: TicketService,
    private _coreService: CoreService,
  ) {}

  ngOnInit(): void {
    this.getTicketList();
  }

  openAddEditForm() {
    const dialogRef = this._dialog.open(TktAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTicketList();
        }
      },
    });
  }
  getTicketList() {
    this._tktService.getTicketList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(TktAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTicketList();
        }
      },
    });
  }
}
