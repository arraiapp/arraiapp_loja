import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TicketService } from './ticket.service';
import { Tickets } from './ticket-interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [RouterModule, NgFor, RouterModule],
  template: ` 
  <div class="container mt-4">
    <h2 class="text-center mb-4">Fichas Cadastradas</h2>
    <div class="table-responsive">
      <table class="table mx-auto" id="ticketTable">
        <thead class="table-info text-center">
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        <!-- For navega por todos os dados recuperado do método getAll, utilizando a biblioteca NGFOR-->
          @for (ticket of tickets; track ticket.description) {
          <tr>
            <td class="text-center" hidden>{{ticket.id}}</td>
            <td class="text-center">{{ticket.description}}</td>
            <td class="text-center">{{ticket.value}}</td>
            <td class="text-center" ><a (click)="editTicket(ticket.id)">Editar</a></td>
            <td class="text-center" ><a (click)="deleteTicket(ticket.id)">Excluir</a></td>
          </tr>
          }
        </tbody>
      </table>
    </div>


    <div class="fixed-bottom d-flex flex-column align-items-center mb-4">

      <button (click)="includeTicket()" class="btn btn-primary mb-2">Adicionar Nova Ficha</button>
      
      <a routerLink="../home-page" class="link-return text-center">Voltar</a>
    </div>

  </div>  `,
  styleUrl: './ticket.component.scss'
})
//Método OnInit serve para utilizar métodos assim que a pagina carregar.
export class TicketComponent implements OnInit {

  tickets : Tickets[] = []

  constructor(
    //Chama dentro do construtor os métodos de serviço de ticket.
    private ticketService: TicketService,
    private router : Router
  ){
  }
  ngOnInit(): void {
    //Método que recupera todo os tickets cadastrados.
    this.getAlltickets()
  }
  //Método que recupera todos os tickets atráves do service de tickets
  getAlltickets(){
    this.ticketService.getAll()
    .subscribe((response: Tickets[]) => {
      if(response){
        this.tickets = response;
      }
    })
  }

  //Método que recebe o id do ticket para deleção
  deleteTicket(ticketId: number): void {
    this.ticketService.delete(ticketId).subscribe({
      next: () => {
        alert('Delete successful');
        //Caso consiga deletar recarrega o grid.
        this.getAlltickets(); 
      },
      error: (err) => alert('Não foi possível deletar')
    });
  }

  //Método que recebe o id do ticket para edição
  editTicket(ticketId: number): void {
    this.router.navigate(["/ticket-info", ticketId]);
  }

  includeTicket(): void {
    this.router.navigate(["/ticket-info",""]);
  }
    

}
