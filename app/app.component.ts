import { Component } from '@angular/core';
import { timestamp } from 'rxjs/operators/timestamp';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];

  storeItems(num) {
    let coord = [];
    let timestamp = new Date();
    switch (num) {
      case 1:
        coord = [1, 1, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 2:
        coord = [1, 2, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 3:
        coord = [1, 3, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 4:
        coord = [2, 1, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 5:
        coord = [2, 2, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 6:
        coord = [2, 3, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 7:
        coord = [3, 1, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 8:
        coord = [3, 2, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 9:
        coord = [3, 3, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case '*':
        coord = [4, 1, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case 0:
        coord = [4, 2, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
      case '#':
        coord = [4, 3, timestamp];
        sessionStorage.setItem(num, JSON.stringify(coord));
        break;
    }
  }
}
