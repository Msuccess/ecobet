import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SlideInOutAnimation } from 'src/app/core/animations/slide_down.animation';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [SlideInOutAnimation],
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  constructor(private modal: NgbModal) {}

  login(): void {
    this.modal.open(AuthenticationComponent, {
      scrollable: true,
    });
  }

  buyTicket(): void {
    this.modal.open(AuthenticationComponent, {
      scrollable: true,
    });
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {}
}
