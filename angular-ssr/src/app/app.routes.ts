import { Routes } from '@angular/router';
import { FormsVendedor } from '../app/feature/forms/forms-vendedor/forms-vendedor';
import { FormsSupermercado } from '../app/feature/forms/forms-supermercado/forms-supermercado';
import { Contactos } from './feature/contacto/contactos/contactos';
import { PerfilMercado } from './feature/perfil/perfil-mercado/perfil-mercado';
import { Inicio } from './feature/inicio/inicio/inicio';

export const routes: Routes = [
    {
        path: 'forms-vendedor',
        component: FormsVendedor
    },
    {
        path: 'forms-supermercado',
        component: FormsSupermercado
    },
    {
        path: 'contactos',
        component: Contactos
    },
    {
        path: 'perfil-mercado',
        component: PerfilMercado
    },
    {
        path: 'inicio',
        component: Inicio
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio'
    }
];