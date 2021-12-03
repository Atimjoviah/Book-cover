const colors = ["wheat","maroon","purple","blue","blue","green","grey","red"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

//get random number 0-40
btn.addEventListener("click", function(){
const randomNumber = getrandomNumber();
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getrandomNumber(){
      return Math.floor(Math.random() * colors.length);
}