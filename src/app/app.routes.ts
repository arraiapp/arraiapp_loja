import { Routes } from '@angular/router';

// importando os components dos arquivos de páginas da aplicação
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';

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
    },
    {
        path: 'ticket',
        component: TicketComponent,
        title: 'Ticket page'
    },
    {
        path: 'ticket-info/:ticketId',
        component: TicketInfoComponent,
        title: 'Ticket info page'
    }
];

export default routeConfig;