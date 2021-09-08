import { Usuario } from './../model/Usuario';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoalmicouti.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoalmicouti.herokuapp.com/usuarios/cadastrar', usuario)
}
  getByUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogpessoalmicouti.herokuapp.com/usuarios/${id}`, this.token)
  }

logado(){
  let ok: boolean = false

  if (environment.token != "") {
    ok = true;
  }
  return ok;
}
}
