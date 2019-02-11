import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kotizaka';
  user = {
    firstname: 'Nambinina',
    age: 24,
    birthday: new Date()
  } ;
}
