// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    const isLightTheme = body.classList.toggle('light-theme');

    // Toggle navbar class
    const navbar = document.querySelector('.navbar');
    if (isLightTheme) {
        navbar.classList.add('navbar-custom-light');
        toggleButton.textContent = 'Dark Theme';
        toggleButton.style.backgroundColor = '#1F2833';
        toggleButton.style.color = '#ffffff';
    } else {
        navbar.classList.remove('navbar-custom-light');
        toggleButton.textContent = 'Light Theme';
        toggleButton.style.backgroundColor = '#ffffff';
        toggleButton.style.color = '#000000';
    }

    // Store the user's preference in localStorage
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

// Apply the theme based on localStorage when the page loads
window.onload = function () {
    const theme = localStorage.getItem('theme');
    const toggleButton = document.getElementById('theme-toggle');
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('.navbar').classList.add('navbar-custom-light');
        toggleButton.textContent = 'Dark Theme';
        toggleButton.style.backgroundColor = '#1F2833'; // Dark background color
        toggleButton.style.color = '#ffffff'; // Light text color
    } else {
        toggleButton.textContent = 'Light Theme';
        toggleButton.style.backgroundColor = '#ffffff'; // Light background color
        toggleButton.style.color = '#000000'; // Dark text color
    }
};