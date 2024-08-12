function toggleFavorite(event, element) {
    event.preventDefault();

    var imgElement = element.querySelector('img.heart-img');

    if (imgElement.getAttribute('src').includes('greyHeart')) {
        imgElement.setAttribute('src', '@Url.Content("~/images/heart.png")');
        imgElement.setAttribute('alt', 'Red Heart'); 
    } else {
        imgElement.setAttribute('src', '@Url.Content("~/images/greyHeart.png")');
        imgElement.setAttribute('alt', 'Grey Heart'); // Update the alt text
    }
}
