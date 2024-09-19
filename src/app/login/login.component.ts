import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <body>
   <div class="login-container">
        <div class="mb-4">
            <h1 class="app-title">ARRAIAPP ADMIN</h1>
        </div>
        <div class="card login-card">
            <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                <form>
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

}
