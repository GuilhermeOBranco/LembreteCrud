import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/service/lembrete.service';


@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.scss']
})
export class CriarLembreteComponent {

  constructor(private toastr: ToastrService,
    private service: LembreteService,
    private Router: Router) { }


  addLembrete(lembrete: Lembrete) {
    this.service.addLembrete(lembrete).subscribe((result) => {
      this.toastr.success("Lemebrete inserido com sucesso", "Sucesso");
      console.log(result);
      this.Router.navigateByUrl('/');
    }, (error) => {
      this.toastr.error("Algo deu errado","Erro");
      console.log(error);
    })
  }

}
