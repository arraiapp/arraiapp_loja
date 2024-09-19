import { Routes } from '@angular/router';

// importando os components dos arquivos de páginas da aplicação
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginComponent,
        title: 'Login Page'
    }
];
