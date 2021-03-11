import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  public error: string;

  constructor() { }

  ngOnInit(): void {
  }

  setError(erro: string, tempo: number = 5000)
  {
    this.error = erro;
    setTimeout(()=>{
      this.error = null;
    }, tempo)
  }

}
