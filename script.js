let menu = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
// function myFu(){
//     document.getElementById("#menu-icon").classList.toggle(".open");
// }
const incClients=document.getElementById("clients");
const incCities=document.getElementById("cities");
const incIndustries=document.getElementById("industries");
const incCampaign=document.getElementById("campaign");

let a=0;
let b=0;
let c=0;
let d=0;

setInterval(()=>{
        a++;
        if(a<=1){

            incClients.innerHTML = a;
        }
    },10)

setInterval(()=>{
        b++;
        if(b<=6){

            incCities.innerHTML = b;
        }
    },10)
    
setInterval(()=>{
        c++;
        if(c<=78){

            incIndustries.innerHTML = c;
        }
    },10)
    
setInterval(()=>{
        d++;
        if(d<=20){

            incCampaign.innerHTML = d;
        }
    },10)
    
    
    





    const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

