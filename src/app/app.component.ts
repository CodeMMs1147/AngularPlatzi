import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nickName = 'CodeMMs';
  age = 25;
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HZr81YPvJJ02lxszyYDmiYSeZ9FT7qfMHA&usqp=CAU'
  btnDisabled = true;

  person = {
    name: 'juan',
    age: 25,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HZr81YPvJJ02lxszyYDmiYSeZ9FT7qfMHA&usqp=CAU'
  }

  nombres: string[] = ['juan', 'julio', 'wander']

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  ageIncrease() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
