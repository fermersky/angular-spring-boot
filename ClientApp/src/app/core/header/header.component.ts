import { Component, OnInit } from '@angular/core';
import { AuthSercie } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bks-core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthSercie, private router: Router) {}

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['home']);
  }

  ngOnInit(): void {}
}
