import { Component, OnInit, inject } from '@angular/core';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { User } from '../../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrl: './edit-profile-page.component.css'
})
export class EditProfilePageComponent implements OnInit {

  private router = inject(Router);
  private userProfileService = inject(UserProfileServiceService);
  public user: User;
  private fb = inject(FormBuilder);
  public myForm: FormGroup = this.fb.group({
    email: [{ value: '', disabled: true }, [Validators.required]],
    name: [{ value: '' }, [Validators.required]],
    dni: [{ value: '', disabled: true }, [Validators.required]],
    apellidos: [{ value: '' }, [Validators.required]],
    categoria: [{ value: '', disabled: true }, [Validators.required]],
    genero: [{ value: '' }, [Validators.required]],
    posicionPista: [{ value: '' }, [Validators.required]],
    ranking: [{ value: '', disabled: true }, [Validators.required]],
    tallaCamiseta: [{ value: '' }, [Validators.required]],
    telefono: [{ value: '' }, [Validators.required]],
  });

  constructor() {
    this.user = {
      email: '',
      name: '',
      apellidos: '',
      categoria: '',
      dni: '',
      genero: '',
      posicionPista: '',
      ranking: 0,
      tallaCamiseta: '',
      telefono: ''
    };
  }

  ngOnInit(): void {
    this.userProfileService.getUserData()
      .subscribe((resp) => {
        this.user.email = resp.usuario.email;
        this.user.name = resp.usuario.name;
        this.user.apellidos = resp.usuarioAll.apellidos;
        this.user.dni = resp.usuarioAll.dni;
        this.user.genero = resp.usuarioAll.genero;
        this.user.categoria = resp.usuarioAll.categoria;
        this.user.posicionPista = resp.usuarioAll.posicionPista;
        this.user.ranking = resp.usuarioAll.ranking;
        this.user.tallaCamiseta = resp.usuarioAll.tallaCamiseta;
        this.user.telefono = resp.usuarioAll.telefono;
        this.myForm.setValue({
          email: this.user.email,
          name: this.user.name,
          dni: this.user.dni,
          apellidos: this.user.apellidos,
          categoria: this.user.categoria,
          genero: this.user.genero,
          posicionPista: this.user.posicionPista,
          ranking: this.user.ranking,
          tallaCamiseta: this.user.tallaCamiseta,
          telefono: this.user.telefono,
        });
      });
  }

  saveChanges() {
    this.myForm.enable();
    this.userProfileService.updateDataUser(this.myForm.value)
      .subscribe((resp) => {
        console.log(resp);
        if (resp.status) {
          Swal.fire({
            title: 'Datos actualizados correctamente',
            icon: 'success',
            confirmButtonText: 'Ok',
            willClose: () => {
              this.router.navigate(['userProfile/my-account']);
            },
          });
        } else {
          Swal.fire({
            title: 'Ha sucedido un error inesperado, al actualizar los datos.',
            icon: 'error',
            confirmButtonText: 'Ok',
            willClose: () => {
              this.router.navigate(['userProfile/my-account']);
            },
          });
        }
      });
  }

  cancel() {
    this.router.navigate(['userProfile/my-account']);
  }

}
