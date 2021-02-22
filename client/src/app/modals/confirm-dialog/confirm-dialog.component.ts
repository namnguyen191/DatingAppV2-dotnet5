import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  result: boolean;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  confirm() {
    this.result = true;
    this.activeModal.dismiss(this.result);
  }

  decline() {
    this.result = false;
    this.activeModal.dismiss(this.result);
  }
}
