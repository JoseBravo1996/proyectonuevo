import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/usuarios/usuario/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {}

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

  onLoggedout():void{
    let usuario = this.authService.usuario.nombre;
    this.authService.logout();
    this.router.navigate(['/login']);
   // localStorage.removeItem('isLoggedin');
    // this.router.navigate(['/login']);
  }

  onProfile():void {
    this.router.navigate(['/profile']);
  }
 
}
