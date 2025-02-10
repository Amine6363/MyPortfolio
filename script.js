/**
 * Select the body element
 */
const body = document.body;

/**
 * Select theme toggle button (moon/sun icon)
 */
const btnTheme = document.querySelector('.fa-moon');

/**
 * Select mobile navigation toggle button (hamburger button)
 */
const btnHamburger = document.querySelector('.nav__hamburger');
const navUl = document.querySelector('.nav__list');

/**
 * Function to add classes to body and theme button
 * @param {string} bodyClass - Class to be added to the body
 * @param {string} btnClass - Class to be added to the theme button
 */
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

/**
 * Retrieve saved theme settings from localStorage
 */
const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

/**
 * Apply saved theme on page load
 */
addThemeClass(getBodyTheme, getBtnTheme);

/**
 * Check if the current theme is dark mode
 * @returns {boolean} - Returns true if dark mode is active
 */
const isDark = () => body.classList.contains('dark');

/**
 * Function to set theme dynamically
 * @param {string} bodyClass - Theme class for body (dark/light)
 * @param {string} btnClass - Class for theme toggle button (fa-moon/fa-sun)
 */
const setTheme = (bodyClass, btnClass) => {
  // Remove existing theme classes from body and button
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));
  
  // Apply new theme classes
  addThemeClass(bodyClass, btnClass);

  // Save new theme settings to localStorage
  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

/**
 * Toggle between dark and light themes
 */
const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

// Event listener for theme toggle button
btnTheme.addEventListener('click', toggleTheme);

/**
 * Function to toggle mobile navigation menu
 */
const displayList = () => {
  if (navUl.classList.contains('display-nav-list')) {
    // Hide navigation menu
    navUl.classList.remove('display-nav-list');
    btnHamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Change icon back
  } else {
    // Show navigation menu
    navUl.classList.add('display-nav-list');
    btnHamburger.innerHTML = '<i class="fas fa-times"></i>'; // Change icon to 'X'
  }
};

// Event listener for hamburger menu button
btnHamburger.addEventListener('click', displayList);

/**
 * Function to show/hide the scroll-to-top button based on scroll position
 */
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    // Show scroll-to-top button
    btnScrollTop.style.display = 'block';
  } else {
    // Hide scroll-to-top button
    btnScrollTop.style.display = 'none';
  }
};

// Event listener for scroll event
document.addEventListener('scroll', scrollUp);
