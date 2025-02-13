let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none"; 
    }
};


mybutton.onclick = function() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' });
}

document.getElementById('goBackBtn').addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
});

document.getElementById("menuIcon").addEventListener("click", function() {
    var menu = document.getElementById("dropdownMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        var footerLinks = document.querySelector(".footer-container").innerHTML;
        menu.innerHTML = footerLinks; // Pobiera linki ze stopki
        menu.style.display = "block";
    }
});

document.addEventListener("click", function(event) {
    var menu = document.getElementById("dropdownMenu");
    var icon = document.getElementById("menuIcon");

    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.style.display = "none";
    }
});
