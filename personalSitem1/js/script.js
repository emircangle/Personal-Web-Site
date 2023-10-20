const menuBar = document.querySelector("#menu-b");
const menu = document.querySelector('#menu');


menuBar.addEventListener("click", (e) => {
  menuBar.querySelectorAll("a").forEach((item)=>{
    item.classList.toggle('hidden')
  });
  menu.classList.toggle('mobil-menu');
  menu.classList.toggle('hidden');

});
