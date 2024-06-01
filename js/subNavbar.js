function createNavBar() {
    const navBarHTML = `
        <header>
            <div >
                <div class="container">
                        <div class="logo">
                            <img src="../images/WhatsApp_Image_2024-05-02_at_15.22.29_7edcdab9-removebg-preview.png" alt="CoFarmingHub Logo">
                        </div>
                        <nav>
                            <button id="nav-toggle" aria-label="Toggle navigation">
                                <i class="fa-solid fa-plus icon" style="color: #1fac0f;"></i>
                            </button>
                            <ul id="nav-menu" class="expanded">
                                <li><a href="../index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="projects.html">Projects</a></li>
                                <li><a href="products.html">Products</a></li>
                                <li><a href="partners.html">Partners</a></li>
                                <li><a href="news.html">News & Events</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </nav>
                </div>
            </div>
        </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navBarHTML);
    
    // Add event listeners for the toggle functionality
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const icon = navToggle.querySelector('.icon');

    navToggle.addEventListener('click', function() {
        if (navMenu.classList.contains('expanded')) {
            navMenu.classList.remove('expanded');
            navMenu.classList.add('collapsed');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-x');
            icon.classList.add('spin');
            icon.style.color = '#ff6666'; // Change the color when the menu is expanded
        } else {
            navMenu.classList.remove('collapsed');
            navMenu.classList.add('expanded');
            icon.classList.remove('fa-x');
            icon.classList.add('fa-plus');
            icon.classList.add('reverse-spin');
            icon.style.color = '#1fac0f'; // Change the color back when the menu is collapsed
        }
    });

    // Listen for the end of the animation and reset the classes
    icon.addEventListener('animationend', function() {
        if (icon.classList.contains('spin')) {
            icon.classList.remove('spin');
        }
        if (icon.classList.contains('reverse-spin')) {
            icon.classList.remove('reverse-spin');
        }
    });
}


// Call the function to create the navigation bar after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    createNavBar();
});