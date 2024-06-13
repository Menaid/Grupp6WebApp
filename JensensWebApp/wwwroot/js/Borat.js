// borat.js

// Function to change the picture of the div.card-body to borat.png
function changeCardBodyToBorat() {
    let cardBody = document.querySelector('.card-body');
    if (cardBody) {
        cardBody.style.backgroundImage = 'url(@Url.Content("~/images/borat.png"))';
    }
}
