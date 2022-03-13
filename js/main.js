let scrollBtn = document.querySelector(".scrollBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        scrollBtn.classList.add("active");
    } else {
        scrollBtn.classList.remove("active");
    }
}
// When the user clicks on the button, scroll to the top of the document
scrollBtn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

VanillaTilt.init(document.querySelector(".mockup-img"), {
    startX: 45,
    startY: 45,
    reset: false,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".mockup-img"));
