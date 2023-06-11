function myLanguage(element){
    alert("You have selected "+ element.value)
}

function checkName(thisElement){

    var Paragraph = document.querySelector("form p");
    Paragraph.innerText = thisElement.value;
}

function gender(element){
    alert("You have selected "+ element.value)
}

function showDog(){
    element  = document.querySelector("img");
    element.src="dog.jpeg";
}

function showCat(){
    element  = document.querySelector("img");
    element.src="cat1.jpg";
}


function addEffects(){

    setTimeout(removeEffects,5000);

    element  = document.querySelector("img");
    element.style.width = "300px";   
    element.style.height = "300px";  
    element.style.transition = "5s"; 

}

function removeEffects(){
    element  = document.querySelector("img");
    element.style.width = "100px";   
    element.style.height = "100px";   
}


var element1 = document.querySelector("#par1");
var element2 = document.querySelector("#par2");
var element3 = document.querySelector("#par3");
var element4 = document.querySelector("#par4");

function changer1(){
var element1 = document.querySelector("#par1");
var element2 = document.querySelector("#par2");
var element3 = document.querySelector("#par3");
var element4 = document.querySelector("#par4");

    element1.style.backgroundColor = "red";
    element3.style.backgroundColor = "red";
    element2.style.backgroundColor = "gold";
    element4.style.backgroundColor = "gold";
}

function changer2(){
    var element1 = document.querySelector("#par1");
var element2 = document.querySelector("#par2");
var element3 = document.querySelector("#par3");
var element4 = document.querySelector("#par4");

    element1.style.backgroundColor = "pink";
    element3.style.backgroundColor = "pink";
    element2.style.backgroundColor = "gray";
    element4.style.backgroundColor = "gray";
}

function changer3(){
    var element1 = document.querySelector("#par1");
var element2 = document.querySelector("#par2");
var element3 = document.querySelector("#par3");
var element4 = document.querySelector("#par4");

    element1.style.fontSize = "15px";
    element2.style.fontSize = "25px";
    element3.style.fontSize = "35px";
    element4.style.fontSize = "45px";
   
}

function changer4(){
    var element1 = document.querySelector("#par1");
var element2 = document.querySelector("#par2");
var element3 = document.querySelector("#par3");
var element4 = document.querySelector("#par4");

    element1.style.fontSize = "35px";
    element2.style.fontSize = "25px";
    element3.style.fontSize = "15px";
    element4.style.fontSize = "5px";
   
}

function myFunction(){
    alert("Oh, I come from the JS File")
}

function light(element) {
    element.innerText = "OFF";
}

function hide(element){
    element.remove();
}


function styleMe(element){
    element.style.backgroundColor = "green";
    element.style.width="50px";
    element.style.height="50px";
    element.style.border="2px solid red";

}


function styleMe2(element){
    element.style.backgroundColor = "#234567";
}

function aaa(element){
    element.style.backgroundColor = "black";
}



function over(element){
    element.style.backgroundColor = "yellow";
}
function leave(element){
    element.style.backgroundColor = "lime";
}


