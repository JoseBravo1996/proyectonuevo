import { Component, OnInit, Inject } from '@angular/core';
import { Usuario } from 'src/app/usuarios/usuario/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/usuarios/usuario.service';
import { AuthService } from 'src/app/usuarios/usuario/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  private fotoSeleccionada: File;

  constructor(private usuarioService: UsuarioService, 
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id:number = +params.get('id');
      if(id){
        this.usuarioService.getUsuario(id).subscribe(usuario => {
            this.usuario = usuario;
        });
    }
  })
 }

 openDialog(): void {
  const dialogRef = this.dialog.open(ProfileDialogComponent, {
    width: '500px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

 seleccionarFoto(event){
  this.fotoSeleccionada = event.target.files[0];
  console.log(this.fotoSeleccionada);
 }
}

