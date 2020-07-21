import { Component } from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  saveTimetable() {
    const name = prompt('Nome do horario?');
    const date = new Date('July 23, 2020'); // mudar para data selecionada
    const unixDate = date.getTime() / 1000.0;
    // document.write(stringify.unixDate);
    console.log('name = ', unixDate);
  }

}
