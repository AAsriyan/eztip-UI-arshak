// const menuImg = document.getElementsByClassName('menu-img');
// menuImg.addEventListener('click', (img) => img.classList.toggle('toggleDisplay'));

// const firstLink = document.querySelectorAll('h1');
// //console.log(Array.from(firstLink));
// console.log(firstLink);
//menuImg.addEventListener('click', () => console.log('click'));

//return document.getElementById('link1').firstLink.classList.toggle('toggleDisplay');

// document.getElementById("myBtn").addEventListener("click", function(){
//   document.getElementById('link1').classList.toggle('toggleDisplay');
// });

class NavLink {
  constructor(nav) {
    this.nav = nav;
    this.menu = document.getElementById('myBtn');
    this.menu.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    this.nav.classList.toggle('toggleDisplay');
  }
}


const nav = document.getElementsByClassName('nav-bar');
const nav2 = document.getElementsByClassName('nav-bar');
console.log(nav2);
//console.log(Array.from(nav));
Array.from(nav).forEach( nav => new NavLink(nav));