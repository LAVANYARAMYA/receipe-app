import { Component } from '@angular/core';

type User = {
  name: string;
  url: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-project';
  names = ['Jegajeeth', 'Elachik', 'Kaashiwni'];
  users: User[] = [
    {
      name: 'Elachik',
      url: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
    },

    {
      name: 'Renuga',
      url: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg',
    },

    {
      name: 'Ram',
      url: 'https://wallpapers.com/images/hd/cool-profile-picture-l0hzjr9omwan07nt.jpg',
    },
  ];
}
