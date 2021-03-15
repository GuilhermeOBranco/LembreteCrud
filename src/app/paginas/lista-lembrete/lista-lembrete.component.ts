import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/service/lembrete.service';


@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.scss']
})
export class ListaLembreteComponent implements AfterViewInit {



  public lembretesAlta: Lembrete[] = [];
  public lembretes: Lembrete[] = [];
  public lembretesMedia: Lembrete[] = [];
  public lembretesBaixa: Lembrete[] = [];

  ngAfterViewInit() {
    this.getListaLembretes();
    this.getListaAltaPrioridade();
    this.getListaBaixaPrioridade();
    this.getListeMediaPrioridade();
  }

  constructor(
    private service: LembreteService,
    private toastr: ToastrService
  ) { }



  getListaLembretes() {

    this.service.getListaLembretes().subscribe((result: Lembrete[]) => {
      this.lembretes = result;
    })

  }

  getListaAltaPrioridade() {
    this.service.getListaLembretes().subscribe((result: Lembrete[]) => {

      this.lembretesAlta = [];
      for (let i = 0; i < result.length; i++) {
        if (result[i].prioridade == 'ALTA') {
          this.lembretesAlta.push(result[i]);
          console.log(this.lembretesAlta);
        }
      }


    }, () => {
      this.toastr.error('Algo de errado na busca', 'ERRO');
    });
  }

  getListeMediaPrioridade() {
    this.service.getListaLembretes().subscribe((result) => {

      this.lembretesMedia = [];
      for (let i = 0; i < result.length; i++) {
        if (result[i].prioridade == 'MEDIA') {
          this.lembretesMedia.push(result[i]);
        }
      }
      console.log(this.lembretesMedia);

    }, () => {
      this.toastr.error('Algo de errado na busca', 'ERRO');
    });
  }

  getListaBaixaPrioridade() {
    this.service.getListaLembretes().subscribe((result) => {

      this.lembretesBaixa = [];
      for (let i = 0; i < result.length; i++) {
        if (result[i].prioridade == 'BAIXA') {
          this.lembretesBaixa.push(result[i]);
        }
      }
      console.log(this.lembretesBaixa);

    }, () => {
      this.toastr.error('Algo de errado na busca', 'ERRO');
    });
  }


  deletaLembrete(id: number) {
    this.service.deleteLembrete(id).subscribe((result) => {
      this.toastr.success('deletado com sucesso', 'SUCESSO');
      this.getListaLembretes();
      this.getListaAltaPrioridade();
      this.getListaBaixaPrioridade();
      this.getListeMediaPrioridade();
    })
  }

  existeLembrete() {
    return this.lembretes.length > 0;
  }

}
