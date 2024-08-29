import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Icons', icon: 'category' },
    { label: 'Maps', icon: 'map' },
    { label: 'User profile', icon: 'person' },
    { label: 'Tables', icon: 'table_chart' },
    { label: 'Login', icon: 'login' },
    { label: 'Register', icon: 'person_add' },
  ];
}
