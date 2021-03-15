import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLembreteComponent } from './compartilhado/form-lembrete/form-lembrete.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';

const routes: Routes = [
  { 
    path: '', component: ListaLembreteComponent 
  },
  {
    path:'adicionar',component:CriarLembreteComponent
  },
  {
    path:'editar/:id',component:EditarLembreteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
