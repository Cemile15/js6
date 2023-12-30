let myBasliq = document.querySelector(".basliq");
let myText1 = document.querySelector("#text1");
let myButton1 = document.querySelector("#btn1");
let myButton2 = document.querySelector("#btn2");
let myButton3 = document.querySelector("#btn3");
let myButton4 = document.querySelector("#btn4");
let myButton5 = document.querySelector("#btn5");
let myButton6 = document.querySelector("#btn6");
let myButton7 = document.querySelector("#btn7");
let myButton8 = document.querySelector("#btn8");
let myColor1 = document.querySelector("#color1");
let myColor2 = document.querySelector("#color2");

let font_size = 35;
let border_radius = 0;
let height = 90;
let width = 250;

let Button_1 = () => {
    font_size += 5;
    myText1.style.fontSize = font_size + "px";
}

myButton1.addEventListener("click", Button_1);

let Button_2 = () => {
    font_size -= 5;
    myText1.style.fontSize = font_size + "px";
}

myButton2.addEventListener("click", Button_2);

let Button_3 = () => {
    border_radius += 5;
    myBasliq.style.borderRadius = border_radius + "px";
}

myButton3.addEventListener("click", Button_3);

let Button_4 = () => {
    border_radius -= 5;
    myBasliq.style.borderRadius = border_radius + "px";
}

myButton4.addEventListener("click", Button_4);

let Button_5 = () => {
    height += 5;
    myBasliq.style.height = height + "px";
}

myButton5.addEventListener("click", Button_5);

let Button_6 = () => {
    height -= 5;
    myBasliq.style.height = height + "px";
}

myButton6.addEventListener("click", Button_6);

let Button_7 = () => {
    width += 5;
    myBasliq.style.width = width + "px";
}

myButton7.addEventListener("click", Button_7);

let Button_8 = () => {
    width -= 5;
    myBasliq.style.width = width + "px";
}

myButton8.addEventListener("click", Button_8);

let Color_1 = () => {
    myText1.style.color = myColor1.value;
}

myColor1.addEventListener("click", Color_1);

let Color_2 = () => {
    myBasliq.style.borderColor = myColor2.value;
}

myColor2.addEventListener("click", Color_2);
