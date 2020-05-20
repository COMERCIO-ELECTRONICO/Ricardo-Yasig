import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './inicio/home/home.component';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';
import {AppRoutesComponent} from './app.routes';
import { UsuarioModule } from './usuario/usuario.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesComponent,
    AppRoutingModule,
    UsuarioModule,
    PokemonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
