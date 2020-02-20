import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Routes } from './menu-items';
import { AuthService } from '../../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  logout(){
    this.authService.logout()
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  // End open close
  ngOnInit() {
    this.sidebarnavItems = Routes.filter(sidebarnavItem => sidebarnavItem);
  }
}
