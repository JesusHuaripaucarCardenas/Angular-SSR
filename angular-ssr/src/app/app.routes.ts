import { Routes } from '@angular/router';
import { FormsVendedor } from '../app/feature/forms/forms-vendedor/forms-vendedor';
import { FormsSupermercado } from '../app/feature/forms/forms-supermercado/forms-supermercado';
import { Contactos } from './feature/contacto/contactos/contactos';
import { PerfilMercado } from './feature/perfil/perfil-mercado/perfil-mercado';
import { PerfilSupermercado } from './feature/perfil/perfil-supermercado/perfil-supermercado';

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
        path: 'perfil-supermercado',
        component: PerfilSupermercado
    },
    {
        path: '',
        pathMatch: 'full',
        component: PerfilMercado 
    }
];
