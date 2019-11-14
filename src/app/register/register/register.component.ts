import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuarios/usuario/usuario';
import { UsuarioService } from 'src/app/usuarios/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private Usuario = new Usuario()
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  create(): void {
    this.usuarioService.create(this.Usuario).subscribe(usuario => {
      Swal.fire({
        type: 'success',
        title: 'Bienvenido ',
        text: 'has inciado sesión correctamente!',
        timer: 2000
      })
  },
  err => {
    if(err.status == 400){
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Usuario o clave incorrectas!',
        timer: 2000
      })
    }
  });
      this.router.navigate(['/login'])
  }
}
