import { Usuario } from './../model/Usuario';
import { Tema } from './../model/Tema';
import { Postagem } from './../model/Postagem';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()


  tema : Tema = new Tema()


  usuario: Usuario = new Usuario()

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
  }

}
