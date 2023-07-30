var nDrop = 500;
function randRange(minNum, maxNum){
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function createRain(){
    for (i = 1; i < nDrop; i++){
        var dropLeft = randRange(0,1600);
        var dropTop = randRange(-1000,1400);

        $('.rain').append('<div class="hati" id="hati' + i  +'"></div>');
        $('#hati' + i).css('left', dropLeft);
        $('#hati' + i).css('top', dropTop);
    }
}

const tombol = document.getElementById("tombol");
tombol.addEventListener("click",function(){
    console.log("halo")
    
    
    
})

var x = document.querySelectorAll(".jawaban")[0];
var y = document.querySelectorAll(".jawaban")[1];

x.addEventListener("mouseover",function() {
    document.querySelector("img").src="images/in-love.png"
})

x.addEventListener("click",()=>{
    gambarCium();
    tulisanBaru();
    ubahBanground();
    ilang();
    var tom1 = new Audio("Finally.mp3");
    tom1.play();
    document.addEventListener("DOMContentLoaded",createRain());
})

// x.addEventListener("mouseout",function() {
//     document.querySelector("img").src="images/afraid.png"
// })

y.addEventListener("click",()=> {
    gambarNangis();
    tulisanBar();
    ilang();
})

y.addEventListener("mouseover",function() {
    document.querySelector("img").src="images/ngambek.png"
})

// y.addEventListener("mouseout",function() {
//     document.querySelector("img").src="images/afraid.png"
// })

// coba function

const gambarCium = () => document.querySelector("img").src="images/kiss.png";
const tulisanBaru = ()=> document.getElementById("haiho").innerHTML="I love You too";
const ubahBanground = ()=> document.querySelector("body").style.backgroundColor="#ff429a";
const ilang = ()=> document.querySelectorAll(".jawaban")[1].style.display="none";

// yg nangis

const gambarNangis = () => document.querySelector("img").src="images/cry.png";
const tulisanBar = ()=> document.getElementById("haiho").innerHTML="gak boleh enggak !";