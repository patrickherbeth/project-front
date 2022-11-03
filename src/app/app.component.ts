import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-front';

  listDocuments: Documents[] = [];


  constructor( private appService: AppService ) { }

  ngOnInit(): void {
    this.buscarDados();
  }

  public async buscarDados(): Promise<void> {
    return await new Promise((resolve, reject) => {
      this.appService.getDados().subscribe({
        next: (resposta) => {
          console.log("resposta ---> ");
          console.log(resposta);
          this.listDocuments = resposta;
          console.log("this.users ---> ");
          console.log(this.listDocuments);
          resolve();
        },
        error: () => {
          reject();
        },
      });
    });
  }
}
