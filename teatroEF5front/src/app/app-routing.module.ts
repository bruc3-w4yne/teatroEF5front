import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent},
  { path: 'login', component: LoginClienteComponent},
  { path: 'regusu', component: RegistrarClienteComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ]
})
export class AppRoutingModule { }
