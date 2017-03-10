import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    .map((month: string, i: number) => ({
      name: month,
      value: i * 5
    }));
  push() {
    this.data.push({ name: '' + Math.random(), value: Math.random() * 100 });
    this.data = this.data.slice();
  }

  changeValues() {
    this.data.map((item: any) => {
      item.value = Math.random() * 100;
      return item
    });
    this.data = this.data.slice();
  }
}
