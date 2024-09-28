import { Routes } from '@angular/router';

// importando os components dos arquivos de páginas da aplicação
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';

// Definindo contante com as lista das rotas
// path : Nome da página que fica na URL
// Component: Componenente que vai ser carregado
export const routeConfig: Routes = [

    {
        path: '',
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: 'home-page',
        component: HomePageComponent,
        title: 'Home Page'
    }, 
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Page'
    }
];

export default routeConfig;