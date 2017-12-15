import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
   // { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
     { path: 'table', title: 'Available Loads',  icon: 'ti-view-list-alt', class: '' },
    { path: 'mytrips', title: 'My Trips',  icon: 'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Trip Planner',  icon: 'ti-settings', class: '' },
   // { path: 'icons', title: 'Trip Planner',  icon: 'ti-settings', class: '' },
    { path: 'icons1', title: 'Team Driving',  icon: 'ti-car', class: '' },
    { path: 'dashboard', title: 'Log Book',  icon: 'ti-write', class: '' },
   
    { path: 'user', title: 'User Profile',  icon: 'ti-user', class: '' },
    { path: 'maps', title: 'Maps',  icon: 'ti-map', class: '' },
    { path: 'icons2', title: 'Loyalty Points',  icon: 'ti-gift', class: '' },
     { path: 'notifications', title: 'Notifications',  icon: 'ti-bell', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
