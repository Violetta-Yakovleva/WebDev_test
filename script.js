// В данном скрипте реализованы методы кнопки "Читать далее" - "Скрыть"
// Реализовала их через getElementById, через классы не смогла, не хватило практики


function readMore1() {
    var dots1 = document.getElementById("dots1");
    var more1 = document.getElementById("more1");
    var btn1 = document.getElementById("btn1");

    if (dots1.style.display == "none") {
        dots1.style.display = "inline";
        btn1.innerHTML = "Читать далее...";
        more1.style.display = "none";
    } else {
        dots1.style.display = "none";
        btn1.innerHTML = "Скрыть";
        more1.style.display = "inline";
    }
}

function readMore2(){
    var dots2 = document.getElementById("dots2");
    var more2 = document.getElementById("more2");
    var btn2 = document.getElementById("btn2");

    if (dots2.style.display == "none") {
        dots2.style.display = "inline";
        btn2.innerHTML = "Читать далее...";
        more2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btn2.innerHTML = "Скрыть";
        more2.style.display = "inline";
    }

}

function readMore3(){
    var dots3 = document.getElementById("dots3");
    var more3 = document.getElementById("more3");
    var btn3 = document.getElementById("btn3");

    if (dots3.style.display == "none") {
        dots3.style.display = "inline";
        btn3.innerHTML = "Читать далее...";
        more3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btn3.innerHTML = "Скрыть";
        more3.style.display = "inline";
    }
}
