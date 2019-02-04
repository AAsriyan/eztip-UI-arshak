const menuImg = document.getElementsByClassName('menu-img');
console.log(menuImg);

const firstLink = document.querySelectorAll('a');
console.log(firstLink);
//menuImg.addEventListener('click', () => console.log('click'));

//return document.getElementById('link1').firstLink.classList.toggle('toggleDisplay');

document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById('link1').classList.toggle('toggleDisplay');
});