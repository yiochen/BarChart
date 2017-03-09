import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    .map((month: string) => ({
      name: month,
      value: Math.random() * 100
    }));
  push() {
    this.data.push({name: ''+Math.random(), value: Math.random() * 100});
    this.data = this.data.slice();
  }
}
