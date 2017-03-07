import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  data = [{
    name: 'Jan',
    value: 12,
  }, {
    name: 'Feb',
    value: 50,
  }, {
    name: 'Mar',
    value: 90
  }];
}
