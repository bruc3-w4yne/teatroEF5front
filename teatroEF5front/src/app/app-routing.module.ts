import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent},
  { path: 'login', component: LoginClienteComponent},
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
