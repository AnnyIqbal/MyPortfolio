import { Injectable } from '@angular/core';

export interface IProject {
    title: string;
    color: string;
    technologies: [string];
    readme: string;
    src: string;
    demo: string;
}

@Injectable()
export class PortfolioService {

  projects: Array<IProject> = [
      {
        title: 'Puzzle',
        color: 'lightgreen',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        readme: 'This is a memory game that flips tiles on click. If two tiles are different, the tiles will be hidden. If the two tiles are same, the tiles would be shown. When all tiles are shown, the game is won!',
        src: '../../assets/Images/game.png',
        demo: 'https://annyportfolio.firebaseapp.com/puzzle.html'
      },
      {
        title: 'Student Database',
        color: 'rosybrown',
        technologies: ['HTML', 'CSS', 'Java Script'],
        readme: 'This is a simple students database based on a form comprised of 4 fields. The data entered by a user binds to a table as soon as the "SAVE" button is clicked.',
        src: '../../assets/Images/db.png',
        demo: 'https://annyportfolio.firebaseapp.com/form-tbl.html'
      },
      {
        title: 'Calculator',
        color: 'lightpink',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        readme: 'The simple calculator is fully functional, performs 6 basic operations and possess On/Off capability.',
        src: '../../assets/Images/calculator.png',
        demo: 'https://annyportfolio.firebaseapp.com/calculator.html'
      },
      // {title: 'MOM', color: 'lightblue', technologies: ['HTML5', 'CSS3'], readme: '', src: '', demo: ''},
      {
        title: 'To Do App',
        color: '#DDBDF1',
        technologies: ['Angular2', 'Angular2 Material', 'AngularFire', 'Firebase Database'],
        readme: 'To Do App lets you create your TODO Account to enlist daily based tasks that are edittable and removable by authenticated users only.',
        src: '../../assets/Images/todo.png',
        demo: 'https://todoapp-ngmaterial2.firebaseapp.com/#/home'
      },
      {
        title: 'Classified App',
        color: 'yellowgreen',
        technologies: ['HTML5', 'CSS3', 'TypeScript', 'Bootstrap'],
        readme: 'The Classified App displays different products to shop online. It has functionality to search products via category and accepts new products for the display showcase.',
        src: '../../assets/Images/classified.png',
        demo: 'https://classified-app-1052b.firebaseapp.com/'
      },
      {
        title: 'Inventory App',
        color: 'blanchedalmond',
        technologies: ['Angular2', 'TypeScript2', 'BootStrap'],
        readme: 'This is a simple online store kind of demo app, with Add-to-Cart functionality.',
        src: '../../assets/Images/pwaInventory.png',
        demo: 'https://inventory-app-3a944.firebaseapp.com/'
      },
      {
        title: 'Reddit App',
        color: 'mediumturquoise',
        technologies: ['Angular2', 'TypeScript2', 'BootStrap'],
        readme: 'This is a voting app that has some articles upon which readers can Upvote or Downvote the current ratings.',
        src: '../../assets/Images/reddit.png',
        demo: 'https://reddit-app-f4d42.firebaseapp.com/'
      },
      {
        title: 'Music Search App',
        color: 'sandybrown',
        technologies: ['Angular2', 'AngularMaterial2', 'TypeScript2', 'AngularFire'],
        readme: 'A searching app for Music, that is based on the Sportify Public API',
        src: '../../assets/Images/musicapp.png',
        demo: 'https://music-search-app-8c043.firebaseapp.com/'
      },
      {
        title: 'YouTube Search App',
        color: 'salmon',
        technologies: ['Angular2', 'AngularMaterial2', 'TypeScript2', 'AngularFire'],
        readme: 'A real time searching app that uses the public API provided by YouTube.',
        src: '../../assets/Images/utube.png',
        demo: 'https://utube-search-app.firebaseapp.com/'
      },
      {
        title: 'PWA-Inventory App',
        color: 'chocolate',
        technologies: ['Progressive Web App', 'Angular2', 'TypeScript2', 'BootStrap'],
        readme: 'This is a simple Progressive Web App like an online store, with Add-to-Cart functionality.',
        src: '../../assets/Images/pwaInventory.png',
        demo: 'https://pwa-inventory-app.firebaseapp.com/'
      },
      {
        title: 'Real-Time Parking Booking App',
        color: 'palevioletred',
        technologies: ['Progressive Web App', 'Angular2', 'TypeScript2', 'AngularMaterial2', 'AngularFire2', 'Firebase Database', 'RxJS5', 'ng2-Redux'],
        readme: 'The project is a smart real-time parking booking system that provides customers an easy way of reserving a parking space online. It overcomes the problem of finding a parking space in commercial areas that unnecessary consumes time.',
        src: '../../assets/Images/app.png',
        demo: 'https://l1opbs-4128f.firebaseapp.com/'
      },
      {
        title: 'Ionic-Inventory App',
        color: 'plum',
        technologies: ['TypeScript2', 'Ionic2', 'Firebase Database'],
        readme: 'This is a simple online store kind of demo app, with Add-to-Cart functionality.',
        src: '../../assets/Images/ionicInventory.png',
        demo: 'https://ionic-inventoryapp.firebaseapp.com/'
      },
      {
        title: 'Ionic-To Do App',
        color: 'silver',
        technologies: ['TypeScript2', 'Ionic2', 'Firebase Database'],
        readme: 'To Do App lets you create your TODO Account to enlist daily based tasks that are edittable and removable.',
        src: '../../assets/Images/ionictodo.png',
        demo: 'https://ionic-todoapp-d0b38.firebaseapp.com/'
      }
    ];
}
