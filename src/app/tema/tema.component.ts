import { TemaService } from './../service/tema.service';
import { Tema } from './../model/Tema';
import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private TemaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token ==""){
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
  }

  findAllTemas() {
    this.TemaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.TemaService.postTema(this.tema).subscribe((resp: Tema)=> { this.tema = resp
    alert('Tema cadastrado com sucesso!')
    this.findAllTemas()
    this.tema = new Tema()
  })
}

}
