function createFooter() {
    const footerHTML = `
    <footer>
    <div class="container">
        <p>&copy; 2024 Co-Farming Hub. All rights reserved. ABN: 73 619 371 470 </p>
        <div class="social-media">
            <a href="https://facebook.com/Co-FarmingHub" target="_blank">Facebook</a>
            <a href="https://twitter.com/Co-FarmingHub" target="_blank">Twitter</a>
            <a href="https://instagram.com/Co-FarmingHub" target="_blank">Instagram</a>
        </div>
        <p style= "margin-top: 1rem;" >Design by <a href="https://www.linkedin.com/in/eden-lee-6016a4300/" target="_blank">Eden Lee</a></p>
    </div>
</footer>
`;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
createFooter();