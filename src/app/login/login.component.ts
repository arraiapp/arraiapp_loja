import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Logins } from './login-interface';
import { HomePageService } from '../home-page/home-page.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  template: `
   <body>
   <div class="login-container">
        <div class="mb-4">
            <h1 class="app-title">ARRAIAPP ADMIN</h1>
        </div>
        <div class="card login-card">
            <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                <form [formGroup]="form" #signupForm="ngForm" (ngSubmit)="submit(signupForm)">
                    <div class="mb-3">
                        <label class="form-label">CPF</label>
                        <input type="text" class="form-control" formControlName="cpf" placeholder="Digite seu CPF">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Senha</label>
                        <input type="password" class="form-control" formControlName="password" placeholder="Digite sua senha">
                    </div>
                    <button type="submit" class="btn btn-primary w-100 login-btn">Entrar</button>
                </form>
                <!-- Caso precise debugar os valores usa isso <pre>{{ form.value | json}}</pre> -->
                <!-- Caso precise debugar a validação cpf usa isso: <div>CPF Valid: {{cpf?.valid}} </div> -->
                
                <!-- Caso precise debugar a validação senha usa isso:<div>Form Submmited: {{signupForm?.submitted}} </div> -->
            </div>
        </div>
    </div>
</body>
  `,
  styleUrl: './login.component.scss',
})
export class LoginComponent {
    
    loginLink: string = '';

    form: FormGroup = new FormGroup({
      cpf : new FormControl('', 
        [ Validators.required, Validators.minLength(11) ]
      ),
      password: new FormControl('', Validators.required)
    });

    get cpf() {return this.form.get("cpf")}
    get password() {return this.form.get("password")}
  
    constructor(
      private loginService: LoginService,
      private homePageService: HomePageService,
      private router : Router
    ) {}

      submit(form: FormGroupDirective){
    if (form.valid){
      this.loginService
      .login(form.value)
      .subscribe({
        next: (response: Logins) => {
          if (response) {
            this.router.navigate(["/home-page"]);
            this.homePageService.setUserData(JSON.parse(JSON.stringify(response)));
          }
        },
        error: (err) => console.log(err),
      });
    }

  }
}
