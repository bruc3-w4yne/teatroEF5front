import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventosMantenimientoComponent } from './eventos-mantenimiento/eventos-mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    LoginClienteComponent,
    RegistrarClienteComponent,
    EventosMantenimientoComponent // Asegúrate de declarar tu componente aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // FormsModule debe estar importado aquí
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }