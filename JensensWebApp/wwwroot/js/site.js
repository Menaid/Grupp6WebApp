function toggleFavorite(element) {
    var imgElement = element.querySelector('img.heart-img');

    // Check the current image source to determine the state
    if (imgElement.getAttribute('src').includes('greyHeart')) {
        // Toggle to heart.png
        imgElement.setAttribute('src', '~/images/heart.png');
    } else {
        // Toggle back to greyHeart.png
        imgElement.setAttribute('src', '~/images/greyHeart.png');
    }
}
