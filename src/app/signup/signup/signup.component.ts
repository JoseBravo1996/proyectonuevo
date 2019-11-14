import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuarios/usuario/usuario';
import { UsuarioService } from 'src/app/usuarios/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private usuario = new Usuario()
  constructor(private usuarioService: UsuarioService, private router: Router) { 
    this.usuario=new Usuario();
  }

  ngOnInit() {
  }

  onSignUp(){
    this.router.navigate(['/login']);
  }

  create(): void {
    this.usuarioService.create(this.usuario).subscribe(usuario => {
      this.router.navigate(['/login'])
  });
}
}
