import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cliente-lembrete';

  @ViewChild(ErrorMsgComponent) errorMessageComponent: ErrorMsgComponent;

  constructor()
  {
  }
  
  ngOnInit(): void {
    this.errorMessageComponent.setError('mensagem de erro');
  }
}
