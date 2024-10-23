import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Tickets } from '../ticket/ticket-interface'
import { TicketService } from '../ticket/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-ticket-info',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  template: `
    <body>
      <h2 class="text-center mt-4">Cadastro de Fichas</h2>
      <form [formGroup]="form" #signupForm="ngForm" (ngSubmit)="submit()">

        <div>
          <input type="text" class="form-control" formControlName="id" hidden>
        </div>

        <div>
          <label for="description" class="form-label">Descricao</label>
          <input type="text" class="form-control" formControlName="description" required>
        </div>


        <div>
          <label for="value" class="form-label">Valor</label>
          <input type="value" class="form-control" formControlName="value" required>
        </div>

        <button type="submit" class="btn btn-primary" >Salvar</button>
      </form> 
      <div class="text-center mb-3">
        <a class="link-return" routerLink="../../ticket">Voltar</a>
      </div>
    </body>
  `,
  styleUrl: './ticket-info.component.scss'
})
export class TicketInfoComponent implements OnInit{

  ticketId: Number | undefined;
  form: FormGroup;
  userData : any = {};
 
  constructor(
    private fb : FormBuilder,
    private ticketService: TicketService,
    private route: ActivatedRoute,
  ) {
    
    this.form = this.fb.group({
      id : [''],
      description: ['', Validators.required],
      value: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.ticketId = +(this.route.snapshot.paramMap.get('ticketId') ?? 0);

    if (this.ticketId){
      this.ticketService
      .getTicket(this.ticketId)
      .subscribe({
        next: (response : Tickets) =>{
          if (response) {
            this.userData = JSON.parse(JSON.stringify(response));

            // Atualiza os campos do formulário com os valores de userData
            this.form.patchValue({
              id: this.userData.id,
              description: this.userData.description,
              value: this.userData.value
            });
          }
        },
        error: (err) => console.log(err),
      })
    }
  }

  get description() {return this.form.get("description")}
  get value() {return this.form.get("value")}


  submit(){
    if (this.form.valid){
      if (this.ticketId){
        this.ticketService
        .updateTicket(this.form.value)
        .subscribe({
          next: (response: Tickets) => {
            if (response){
              console.log("passou!")
              alert('Cadastrado com sucesso!');
            }
          },
            error: (err) => console.log(err),
        });
      }else{
        this.ticketService
        .register(this.form.value)
        .subscribe({
          next: (response: Tickets) => {
            if (response) {
              alert('Cadastrado com sucesso!');
            }
          },
            error: (err) => console.log(err),
        });
      }
    }  
  }
}
