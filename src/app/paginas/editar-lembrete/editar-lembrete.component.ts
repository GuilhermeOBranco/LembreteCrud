import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/service/lembrete.service';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.scss']
})
export class EditarLembreteComponent{

  public lembrete: Lembrete;

  constructor(
    private router: Router,
    private service: LembreteService,
    private ActivatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.getLembrete(this.ActivatedRoute.snapshot.params.id);
   }

  getLembrete(id: number)
  {
    this.service.getLembrete(id).subscribe((result) => {
      this.lembrete = result;
    }, (error) =>{ this.toastr.error(error, 'algo deu errado')})
  }

  atualizaLembrete(lembrete: Lembrete)
  {
    this.service.atualizaLembrete(lembrete).subscribe((result) => {
      this.toastr.success('Atualizado com sucesso','sucesso');
      this.router.navigateByUrl('/');
    }, (error) => {
      this.toastr.error('Algo deu errado', 'Erro');
      this.router.navigateByUrl('/');
      console.log(error);
  })
  }
 
}
