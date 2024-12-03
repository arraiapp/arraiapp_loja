import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterService } from './register.service';
import { Registers } from './register-interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  template: `    
  <body>
    <h2 class="text-center mt-4">Cadastro de Usuário</h2>

    <form [formGroup]="form" #signupForm="ngForm" (ngSubmit)="submit()">

      <div>
        <label for="nome" class="form-label">Nome</label>
        <input type="text" class="form-control" formControlName="name" placeholder="Digite seu nome" required>
      </div>


      <div>
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" formControlName="email" placeholder="Digite seu email" required>
      </div>

      <div>
        <label for="phone" class="form-label">Telefone</label>
        <input type="text" class="form-control" formControlName="phone" placeholder="Digite seu telefone" required>
      </div>


      <div>
        <label for="cpf" class="form-label">CPF</label>
        <input type="text" class="form-control" id="cpf" formControlName="cpf" placeholder="Digite seu CPF" required>
      </div>


      <div>
        <label for="senha" class="form-label">Senha</label>
        <input type="password" class="form-control" formControlName="password" placeholder="Digite sua senha" required>
      </div>

      <button type="submit" class="btn btn-primary" >Cadastrar</button>
    </form> 
    <div class="text-center mb-3">
      <a class="link-return" routerLink="../home-page">Voltar</a>
    </div>
</body>
`,
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  form: FormGroup;

  constructor(
    private fb : FormBuilder,
    private registerService: RegisterService,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      password: ['', Validators.required],
      Admin: [true]
    });
  }

  get name() {return this.form.get("name")}
  get email() {return this.form.get("email")}
  get phone() {return this.form.get("email")}
  get cpf() {return this.form.get("cpf")}
  get password() {return this.form.get("password")}
  get Admin() {return this.form.get("Admin")}

  submit(){
      if (this.form.valid){
        this.registerService
        .register(this.form.value)
        .subscribe({
          next: (response: Registers) => {
          if (response) {
              alert('Cadastrado com sucesso!');
            }
          },
          error: (err) => console.log(err),
        });
      }
  }

}
