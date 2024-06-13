document.addEventListener("DOMContentLoaded", function() {
    var rocket = document.getElementById("following-image");
    var initialTop = rocket.offsetTop;
    var rocketHeight = rocket.offsetHeight;
    var maxBottom = window.innerHeight - rocketHeight - initialTop;

    function handleScroll() {
        var currentScroll = window.scrollY || window.pageYOffset;
        var newTop = initialTop + (currentScroll / 15);
        newTop = Math.min(newTop, maxBottom);
        if (newTop >= 0) {
            rocket.style.top = newTop + "px";
        }
    }

    window.addEventListener("scroll", handleScroll);
});
