/* 
  ========================================================================================
    Importacion para rutas de la aplicacion y su funcionamiento
  ========================================================================================
*/
import { Routes } from '@angular/router';
import { RoleGuard } from './guards/role/role.guard';

/* 
  ========================================================================================
    Importacion de pruebas
  ========================================================================================
*/
//import { UsuariosComponent } from './components/usuarios/usuarios.component';

/* 
  ========================================================================================
    Importacion para inicio de sesion
  ========================================================================================
*/
import { MainLoginComponent } from './pages/main-login/main-login.component';

/* 
  ========================================================================================
    Importacion para superusuarios
  ========================================================================================
*/
import { SpradmComponent } from './pages/spradm/spradm.component';
import { SpradmProyectosComponent } from './pages/spradm/spradm-proyectos/spradm-proyectos.component';
import { SpradmAboutComponent } from './pages/spradm/spradm-about/spradm-about.component';
import { SpradmUsersComponent } from './pages/spradm/spradm-users/spradm-users.component';
import { SpradmAdminComponent } from './pages/spradm/spradm-admin/spradm-admin.component';
import { SpradmSpradmComponent } from './pages/spradm/spradm-spradm/spradm-spradm.component';
import { SpradmProfileComponent } from './pages/spradm/spradm-profile/spradm-profile.component';
import { SpradmHomeComponent } from './pages/spradm/spradm-home/spradm-home.component';
import { SpradmPrivateFilesComponent } from './pages/spradm/spradm-private-files/spradm-private-files.component';
import { SpradmHelpComponent } from './pages/spradm/spradm-help/spradm-help.component';
import { SpradmProyectosAboutComponent } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about.component';
import { SpradmProyectosAboutCapitulo1Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo1/spradm-proyectos-about-capitulo1.component';
import { SpradmProyectosAboutCapitulo2Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo2/spradm-proyectos-about-capitulo2.component';
import { SpradmProyectosAboutCapitulo3Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo3/spradm-proyectos-about-capitulo3.component';
import { SpradmProyectosAboutCapitulo4Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo4/spradm-proyectos-about-capitulo4.component';
import { SpradmProyectosAboutCapitulo5Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo5/spradm-proyectos-about-capitulo5.component';
import { SpradmProyectosAboutCapitulo6Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo6/spradm-proyectos-about-capitulo6.component';
import { SpradmProyectosAboutCapitulo7Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo7/spradm-proyectos-about-capitulo7.component';
import { SpradmProyectosAboutCapitulo8Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo8/spradm-proyectos-about-capitulo8.component';
import { SpradmProyectosAboutCapitulo9Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo9/spradm-proyectos-about-capitulo9.component';
import { SpradmProyectosAboutCapitulo10Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo10/spradm-proyectos-about-capitulo10.component';
import { SpradmProyectosAboutCapitulo11Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo11/spradm-proyectos-about-capitulo11.component';
import { SpradmProyectosAboutCapitulo12Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo12/spradm-proyectos-about-capitulo12.component';
import { SpradmProyectosAboutCapitulo13Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo13/spradm-proyectos-about-capitulo13.component';
import { SpradmProyectosAboutCapitulo14Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo14/spradm-proyectos-about-capitulo14.component';
import { SpradmProyectosAboutCapitulo15Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo15/spradm-proyectos-about-capitulo15.component';
import { SpradmProyectosAboutCapitulo16Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo16/spradm-proyectos-about-capitulo16.component';
import { SpradmProyectosAboutCapitulo17Component } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-capitulo17/spradm-proyectos-about-capitulo17.component';

/* 
  ========================================================================================
    Importacion para administradores
  ========================================================================================
*/
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProyectosComponent } from './pages/admin/admin-proyectos/admin-proyectos.component';
import { AdminAboutComponent } from './pages/admin/admin-about/admin-about.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { AdminAdminsComponent } from './pages/admin/admin-admins/admin-admins.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminPrivateFilesComponent } from './pages/admin/admin-private-files/admin-private-files.component';
import { AdminHelpComponent } from './pages/admin/admin-help/admin-help.component';

/* 
  ========================================================================================
    Importacion para usuarios
  ========================================================================================
*/
import { UserComponent } from './pages/user/user.component';
import { UserProyectosComponent } from './pages/user/user-proyectos/user-proyectos.component';
import { UserAboutComponent } from './pages/user/user-about/user-about.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserPrivateFilesComponent } from './pages/user/user-private-files/user-private-files.component';
import { UserHelpComponent } from './pages/user/user-help/user-help.component';
import { SpradmProyectosAboutHomeComponent } from './pages/spradm/spradm-proyectos/spradm-proyectos-about/spradm-proyectos-about-home/spradm-proyectos-about-home.component';


export const routes: Routes = [
  /* 
    ========================================================================================
      Ruta para el inicio de sesion
    ========================================================================================
  */
  { path: 'mayma/login', component: MainLoginComponent }, // ruta de inicio de sesión

  /* 
    ========================================================================================
      Rutas para superusuarios
    ========================================================================================
  */
  { path: 'mayma/auth/spradm', 
    component: SpradmComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Superusuario'] }, // solo accesible por superusuarios
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: SpradmHomeComponent },
      { path: 'about', component: SpradmAboutComponent },
      { path: 'spradm', component: SpradmSpradmComponent },
      { path: 'admins', component: SpradmAdminComponent },
      { path: 'users', component: SpradmUsersComponent },
      { path: 'help', component: SpradmHelpComponent },
      { path: 'profile', component: SpradmProfileComponent },
      { path: 'private-files', component: SpradmPrivateFilesComponent },
      { path: 'project', component: SpradmProyectosComponent },
      { path: 'project/:id', 
        component: SpradmProyectosAboutComponent,
        children: [
          { path: '', redirectTo: 'details', pathMatch: 'full' },
          { path: 'details', component: SpradmProyectosAboutHomeComponent }, // detalle del proyecto
          { path: 'capitulo-1', component: SpradmProyectosAboutCapitulo1Component },
          { path: 'capitulo-2', component: SpradmProyectosAboutCapitulo2Component },
          { path: 'capitulo-3', component: SpradmProyectosAboutCapitulo3Component },
          { path: 'capitulo-4', component: SpradmProyectosAboutCapitulo4Component },
          { path: 'capitulo-5', component: SpradmProyectosAboutCapitulo5Component },
          { path: 'capitulo-6', component: SpradmProyectosAboutCapitulo6Component },
          { path: 'capitulo-7', component: SpradmProyectosAboutCapitulo7Component },
          { path: 'capitulo-8', component: SpradmProyectosAboutCapitulo8Component },
          { path: 'capitulo-9', component: SpradmProyectosAboutCapitulo9Component },
          { path: 'capitulo-10', component: SpradmProyectosAboutCapitulo10Component },
          { path: 'capitulo-11', component: SpradmProyectosAboutCapitulo11Component },
          { path: 'capitulo-12', component: SpradmProyectosAboutCapitulo12Component },
          { path: 'capitulo-13', component: SpradmProyectosAboutCapitulo13Component },
          { path: 'capitulo-14', component: SpradmProyectosAboutCapitulo14Component },
          { path: 'capitulo-15', component: SpradmProyectosAboutCapitulo15Component },
          { path: 'capitulo-16', component: SpradmProyectosAboutCapitulo16Component },
          { path: 'capitulo-17', component: SpradmProyectosAboutCapitulo17Component },
        ] 
      }, // detalle del proyecto
    ]
  },

  /* 
    ========================================================================================
      Rutas para Administradores
    ========================================================================================
  */
  { path: 'mayma/auth/admin', 
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Administrador'] }, // solo accesible por administradores
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'about', component: AdminAboutComponent },
      { path: 'admins', component: AdminAdminsComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'help', component: AdminHelpComponent },
      { path: 'profile', component: AdminProfileComponent },
      { path: 'private-files', component: AdminPrivateFilesComponent },
      { path: 'project', 
        component: AdminProyectosComponent,
        children: [
          { path: 'list', component: AdminPrivateFilesComponent },
          { path: 'name', component: AdminPrivateFilesComponent },
        ]
        /*
        children: [
          { path: 'capitulo-1', component: AdminCapitulo1Component },
          { path: 'capitulo-2', component: AdminCapitulo2Component },
          { path: 'capitulo-3', component: AdminCapitulo3Component },
          { path: 'capitulo-4', component: AdminCapitulo4Component },
          { path: 'capitulo-5', component: AdminCapitulo5Component },
          { path: 'capitulo-6', component: AdminCapitulo6Component },
          { path: 'capitulo-7', component: AdminCapitulo7Component },
          { path: 'capitulo-8', component: AdminCapitulo8Component },
          { path: 'capitulo-9', component: AdminCapitulo9Component },
          { path: 'capitulo-10', component: AdminCapitulo10Component },
          { path: 'capitulo-11', component: AdminCapitulo11Component },
          { path: 'capitulo-12', component: AdminCapitulo12Component },
          { path: 'capitulo-13', component: AdminCapitulo13Component },
          { path: 'capitulo-14', component: AdminCapitulo14Component },
          { path: 'capitulo-15', component: AdminCapitulo15Component },
          { path: 'capitulo-16', component: AdminCapitulo16Component },
          { path: 'capitulo-17', component: AdminCapitulo17Component },
        ]
          */
      },
    ] 
  },

  /* 
    ========================================================================================
      Rutas para Usuarios
    ========================================================================================
  */
  { path: 'mayma/auth/usr',
    component: UserComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Usuario'] }, // solo accesible por usuarios
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },  // redirige a home
      { path: 'about', component: UserAboutComponent },
      { path: 'help', component: UserHelpComponent },
      { path: 'home', component: UserHomeComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'project', component: UserProyectosComponent },
      { path: 'private-files', component: UserPrivateFilesComponent },
    ]
  },

  /* 
    ========================================================================================
      Rutas por defecto:

      * Esta ruta se ejecuta si no se encuentra ninguna de las anteriores, no se recomienda
        ponerla al inicio porque no va a funcionar como se espera.
      * Se recomienda ponerla al final de todas las rutas.
    ========================================================================================
  */
  { path: '**', redirectTo: '/mayma/login', pathMatch: 'full' }, // redirige al inicio
];
