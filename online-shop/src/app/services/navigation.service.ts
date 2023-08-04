import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../modules/shared/routs/route.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigateTo(route: AppRoutes): void {
    this.router.navigate([route]);
  }

  navigateToWithParams(route: AppRoutes, params: any): void {
    this.router.navigate([route,params]);
  }
}
