import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageService } from './home-page.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <body>
      <div *ngIf="userData">
        <div class="container mb-3 header">
          <div class="row">
            <div class="col-9 offset-1 title">
              <h3>ARRAIAPP ADMIN</h3>
            </div>
          </div>
        </div>
        <div class="container mb-3 sub-title">
          <h2>Bem vindo, {{this.userData.name}}!</h2>
        </div>
        <div class="d-grid gap-2 btn-page">
          <button type="button" (click)="navegateUserRegister()" class="btn btn-primary btn-lg btn-block btn-buy">Cadastar usuário</button>
          <button type="button" (click)="navegateUserTicket()" class="btn btn-secondary btn-lg btn-success btn-buy">Cadastar ficha</button>
          <button type="button" class="btn btn-secondary btn-lg btn-info btn-buy">Ler produto</button>
        </div>
      </div>
      <div *ngIf="!userData">
        <p>Carregando dados do usuário...</p>
      </div>
    </body>
  `,
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  userData: any;

  constructor(
    private homePageService: HomePageService,
    private router : Router
  ) {}

  ngOnInit() {
    this.userData = this.homePageService.getUserData();
  }

  navegateUserRegister(){
    if (this.userData.Admin == false){
      alert("Apenas administradores podem cadastrar usuários!")
    }else{
      this.router.navigate(["/register"]);
    }
  }

  navegateUserTicket(){
    if (this.userData.Admin == false){
      alert("Apenas administradores podem cadastrar fichas!")
    }else{
      this.router.navigate(["/ticket"]);
    }
  }

}
