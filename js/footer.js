// footer.js
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footerSection');
    if (!footer) return;

    const year = new Date().getFullYear();
    footer.innerHTML = `
    <div class="footer-container">
        <p>&copy; ${year} Sayan Mondal. All rights reserved.</p>
        <nav class="footer-links" aria-label="Footer Navigation">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/disclaimer">Disclaimer</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
        </nav>
        <div class="social-icons">
            <a href="https://linkedin.com/in/analystsayan" target="_blank" aria-label="LinkedIn" class="button-nature">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:work.mondalsayan@gmail.com" aria-label="Email" class="button-nature">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>
    </div>
    `;
});
