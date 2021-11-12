function readmore() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementsByClassName ("button1");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.textContent = "read more";
        moreText.style.display = "none";
    } 
    else {
        dots.style.display = "none";
        btnText.textContent = "read less";
        moreText.style.display = "inline";
    }
}

function readmore1() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementsByClassName ("button2");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.textContent = "read more";
        moreText.style.display = "none";
    } 
    else {
        dots.style.display = "none";
        btnText.textContent = "read less";
        moreText.style.display = "inline";
    }
}

function readmore2() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementsByClassName ("button3");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.textContent = "read more";
        moreText.style.display = "none";
    } 
    else {
        dots.style.display = "none";
        btnText.textContent = "read less";
        moreText.style.display = "inline";
    }
}