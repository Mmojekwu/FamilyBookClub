function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("overlay").style.display = "none";
}

function openSearchBar(){
    document.getElementById("input-rectangle").style.display = "block";
    document.getElementsByName('input-field')[0].placeholder='Search';
    document.getElementById("photo").style.display = "none";
    document.getElementById("search").style.right = "11.94%";
    document.getElementById("search").style.left = "20%";
    document.getElementById("search-button").style.backgroundColor = "#EEEEEE";
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("brand").style.display = "none";
    document.getElementById("libraries").style.display = "none";
    document.getElementById("badged-icon").style.display = "none";
    document.getElementById("back-icon2").style.display = "block";

    var all = document.getElementsByClassName('logo-mobile');
    for (var i = 0; i < all.length; i++) {
    all[i].style.display = 'none';
    }

}

function closeSearchBar(){
    document.getElementById("input-rectangle").style.display = "none";
    document.getElementById("photo").style.display = "block";
    document.getElementById("search").style.right = "250px";
    document.getElementById("search").style.left = "30.56%";
    document.getElementById("search-button").style.backgroundColor = "rgb(255, 255, 255, 0.01)";
    document.getElementById("mobile-menu").style.display = "block";
    document.getElementById("brand").style.display = "block";
    document.getElementById("libraries").style.display = "block";
    document.getElementById("badged-icon").style.display = "block";
    document.getElementById("back-icon2").style.display = "none";


    var all = document.getElementsByClassName('logo-mobile');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'block';
    }

}

function openDetails3(){
    document.getElementById("button3").style.display = "block"
}
function openDetails4(){
    document.getElementById("button4").style.display = "block"
}
function openDetails5(){
    document.getElementById("button5").style.display = "block"
}
function openDetail6(){
    document.getElementById("button6").style.display = "block"
}
function openDetails7(){
    document.getElementById("button7").style.display = "block"
}
function openDetails8(){
    document.getElementById("button8").style.display = "block"
}
function openDetails9(){
    document.getElementById("button9").style.display = "block"
}
function openDetails10(){
    document.getElementById("button10").style.display = "block"
}
function openDetails11(){
    document.getElementById("button11").style.display = "block"
}
function openDetails12(){
    document.getElementById("button12").style.display = "block"
}


function closeDetails3(){
    document.getElementById("button3").style.display = "none"
}
function closeDetails4(){
    document.getElementById("button4").style.display = "none"
}
function closeDetails5(){
    document.getElementById("button5").style.display = "none"
}
function closeDetails6(){
    document.getElementById("button6").style.display = "none"
}
function closeDetails7(){
    document.getElementById("button7").style.display = "none"
}
function closeDetails8(){
    document.getElementById("button8").style.display = "none"
}
function closeDetails9(){
    document.getElementById("button9").style.display = "none"
}
function closeDetails10(){
    document.getElementById("button10").style.display = "none"
}
function closeDetails11(){
    document.getElementById("button11").style.display = "none"
}
function closeDetails12(){
    document.getElementById("button12").style.display = "none"
}
