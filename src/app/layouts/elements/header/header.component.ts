import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private modal: NgbModal) {}

  login(): void {
    this.modal.open(AuthenticationComponent);
  }

  buyTicket(): void {
    this.modal.open(AuthenticationComponent);
  }

  ngOnInit(): void {}
}
