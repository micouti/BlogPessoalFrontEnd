import { TemaService } from './../../service/tema.service';
import { PostagemService } from './../../service/postagem.service';
import { Tema } from './../../model/Tema';
import { Postagem } from './../../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()

  tema: Tema = new Tema()
  idTema: number
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    window.scroll(0,0)
    
    if(environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    let item = this.route.snapshot.params['id']
    this.findPostagemById(item)

    this.getAllTemas()
    this.findAllTemas()
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=> {this.tema = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }

  findPostagemById(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=> {
      this.postagem = resp
    })
  }

  atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert("Postagem editada com sucesso")
      this.router.navigate(['/inicio'])
    })
  }

}

