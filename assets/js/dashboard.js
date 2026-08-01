document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"Bizine Workspace loaded"
);



const cards =
document.querySelectorAll(
".tool-card"
);



cards.forEach(card=>{


card.addEventListener(
"click",
()=>{


alert(
card.dataset.name +
" selected"
);


});


});


});