import { Usuario } from './../../model/Usuario';
import { UserLogin } from './../../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private htpp: HttpClient
  ) {}

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.htpp.post<UserLogin>('https://blogpessoalmicouti.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.htpp.post<Usuario>('https://blogpessoalmicouti.herokuapp.com/usuarios/cadastrar', usuario)
}

}
